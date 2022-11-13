import { FC } from "react";

type PropsType = {
    itemsArr: Array<string> | null
    title: string
}

export const List: FC<PropsType> = ({ itemsArr, title }) => {
    return (
        <div className="mb-5">
            <h3 className='text-xl font-bold py-5 text-darkBlue '>{title}</h3>
            <ul className='list-[square] list-inside text-lg'>
                {itemsArr ? itemsArr.map(l => (l !== "\n\n") ? <li className='sm:font-["Roboto"]' key={l}>{l}</li> : '') : 'No benefits...'}
            </ul>
        </div>
    )
}