import { FC, useEffect } from "react";
import { List } from "./List";

type InformationObj = {
    generalInformation: string | null
    responsopilitiesInformation: string | null
    benefitsInformation:  Array<string> | null
}

type PropsType = {
    description: string
}

export const DescriptionJobContainer: FC<PropsType> = ({description}) => {

    const editingDescriptionMethod = (description: string): InformationObj => {
        let generalInformation;
        let responsopilitiesIndex = description.indexOf('Responsopilities:');
        let benefitsIndex = description.indexOf('Compensation & Benefits:');
        let responsopilitiesInformation;
        let benefitsInformation;

        if (responsopilitiesIndex) {
            generalInformation = description.slice(0, responsopilitiesIndex);
        } else generalInformation = null;

        if (responsopilitiesIndex && benefitsIndex) {
            responsopilitiesInformation = description.slice(responsopilitiesIndex, benefitsIndex);
            responsopilitiesInformation = responsopilitiesInformation.split(' ').slice(1).join(' ');
        } else responsopilitiesInformation = null;

        if (benefitsIndex) {
            benefitsInformation = description.slice(benefitsIndex + 1);
            benefitsInformation = benefitsInformation.split('');
            let index = benefitsInformation.indexOf(':');
            benefitsInformation = benefitsInformation.slice(index+1).join('').split('.');                        
        } else benefitsInformation = null;

        return {
            generalInformation: generalInformation,
            responsopilitiesInformation: responsopilitiesInformation,
            benefitsInformation: benefitsInformation
        }
    }

    let informationObj = description && editingDescriptionMethod(description);

    useEffect(() => {
        console.log(informationObj);
        
    },[informationObj])

    return (
        <div>
            <div className='sm:font-["Roboto"]'>{informationObj && informationObj.generalInformation}</div>
            <div className="mb-5">
                <h3 className='text-xl font-bold py-5 text-darkBlue '>Responsopilities:</h3>
                <div className='text-lg sm:font-["Roboto"]'>
                    {informationObj ? informationObj.responsopilitiesInformation : ''}
                </div>
            </div>
            <List title="Compensation & Benefits:" itemsArr={informationObj ? informationObj.benefitsInformation : []} />
        </div>
    )
}