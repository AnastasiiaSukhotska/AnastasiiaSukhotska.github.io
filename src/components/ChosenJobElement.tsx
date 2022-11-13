import moment from "moment"
import { FC } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router"
import { compose } from "redux"
import { actions } from "../redux/reducer"
import { AppStateType } from "../redux/state"
import { JobDataType } from "../redux/reducer"
import { MapContainer } from "./Map/MapContainer"
import { EmptyStarSign, SaveSign, ShareSign } from "../common/signs"
import { Subtitle } from "../common/Titles"
import { ContactsInformationCard } from '../common/ContactsCard'
import { CardElementBox } from "../common/CardsElementBox"
import { List } from "../common/List"
import { editingSalaryMethod } from "../common/Editors"
import {v4 as uuid } from 'uuid';


type PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    chosenJobElement: JobDataType | null
}

type MapDispatchToPropsType = {
    returnToList: () => void
}

const ChosenJobElement: FC<PropsType> = ({ chosenJobElement, returnToList }) => {

    const returnToListHandler = () => {
        returnToList();
    }

    let date = moment(chosenJobElement?.createdAt).fromNow();

    let editedSalary = editingSalaryMethod(chosenJobElement?.salary ? chosenJobElement?.salary : '')

    if (!chosenJobElement) {
        return <Navigate to='/' />
    }
    return (
        <div className='text-opacityBlue sm:text-darkBlue text-lg py-6 sm:py-10 px-6 flex flex-col sm:flex sm:flex-row container mx-auto'>
            <div className='sm:basis-9/12'>
                <div className='sm:mr-28 '>
                    <div className='flex flex-col justify-center sm:flex-row sm:justify-between sm:items-end sm:border-b sm:border-lineColor  '>
                        <Subtitle title='Job details' />
                        <div className=' pb-8 sm:pb-1 flex sm:content-center sm:pt-0'>
                            <EmptyStarSign />
                            <SaveSign />
                            <a href='#' className='mr-8 text-base sm:inline-block sm:font-["Roboto"]'> Save to my list</a>
                            <a href='#' className='text-base sm:font-["Roboto"]'>
                                <ShareSign /> Share</a>
                        </div>
                    </div>
                    <button className='bg-btnBlue px-7 py-4 rounded-lg text-white text-xs uppercase hidden sm:flex my-16'>Apply now</button>
                    <div className='grid grid-cols-12 grid-flow-row items-center pb-3.5'>
                        <div className='text-darkBlue font-bold proximaNova text-2xl col-span-12 row-span-2 sm:col-span-8'>{chosenJobElement.title}</div>
                        <div className='items-center h-full col-span-6 col-start-7 col-end-12 row-span-1 sm:col-span-4 justify-self-end flex flex-col-reverse sm:flex-col '>
                            <div className='text-xl font-bold proximaNova w-full flex justify-end sm:justify-start'>
                                <span>{`€ ${editedSalary}`}</span>
                            </div>
                            <div className='text-opacityBlue/80 text-lg px-1 w-full flex justify-self-end sm:justify-start'>
                                <span>Brutto, per year</span>
                            </div>
                        </div>
                        <div className='h-full text-opacityBlue/60 text-xs col-span-6 col-start-1 col-end-6 row-span-1 flex  pt-4'>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className='sm:font-["Roboto"]'>{chosenJobElement.description}</div>
                    <List title="Compensation & Benefits:" itemsArr={chosenJobElement.benefits} />
                    <button className='bg-btnBlue px-7 py-4 rounded-lg text-white text-xs uppercase mb-[135px] mx-auto block sm:mx-0'>Apply now</button>
                    <div className='flex flex-col sm:flex-col-reverse'>
                        <div>
                            <div className='sm:border-b sm:border-lineColor pb-3'>
                                <Subtitle title='Attached images' />
                            </div>
                            <div className='flex flex-col items-center xs:flex-row sm:flex-col imgScreem:flex-row justify-between pt-4 pb-14'>
                                {chosenJobElement ? chosenJobElement.pictures.map(i => <img className='h-44 w-56 rounded-md mb-4' src={i} key={uuid()} />) : ''}
                            </div>
                        </div>

                        <div className='sm:mb-[135px]'>
                            <div className='sm:border-b sm:border-lineColor pb-3'>
                                <Subtitle title='Additional info' />
                            </div>
                            <CardElementBox title='Employment type' mappingArray={chosenJobElement.employment_type} bgColor='blueCardColor' borderColor='[#55699E]' />
                            <CardElementBox title='Benefits' mappingArray={chosenJobElement.benefits} bgColor='yellowCardColor' textColor='[#988B49]' borderColor='[#FFCF00]' />
                        </div>
                    </div>
                </div>
                <button className='returnBtn mb-[35px] sm:mb-0 relative py-4 mt-10 bg-blueCardColor pr-6 pl-12 rounded-md uppercase mt-3 sm:-ml-7' onClick={returnToListHandler}> return to job board</button>
            </div>
            <div className='sm:basis-3/12 rounded-md'>
                <div className='rounded-md'>
                    <div className='sm:hidden'>
                        <Subtitle title='Contacts' />
                    </div>
                    <div className='rounded-md mt-6 sm:mt-0 rounded-md overflow-hidden'>
                        <ContactsInformationCard name={chosenJobElement.name} email={chosenJobElement.email} address={chosenJobElement.address} phone={chosenJobElement.phone} />
                        <MapContainer location={chosenJobElement.location} />
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        chosenJobElement: state.chosenJobElement
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { returnToList: actions.returnToList }))
    (ChosenJobElement);