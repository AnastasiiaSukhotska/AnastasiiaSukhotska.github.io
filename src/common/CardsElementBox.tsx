import { FC } from "react";
import {v4 as uuid } from 'uuid';

type PropsType = {
    mappingArray: Array<string>
    title: string
    textColor?: string
    bgColor: string
    borderColor: string
}

export const CardElementBox: FC<PropsType> = ({ textColor, bgColor, borderColor, title, mappingArray }) => {

    return (
        <div>
            <h3 className='text-xl py-4 opacity-80 text-opacityBlue'>{title}</h3>
            <div className='flex'>
                {mappingArray ? mappingArray.map(b => <div className={`py-4 px-1.5 bg-${bgColor} text-${textColor} rounded-md border border-${borderColor} mr-2 font-bold `} key={uuid()}>{b}</div>) : ''}
            </div>
        </div>
    )
}

