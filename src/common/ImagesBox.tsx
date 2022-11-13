import { FC } from "react";
import {v4 as uuid } from 'uuid';


type PropsType = {
    pictures: Array<string>
}

export const ImagesBox: FC<PropsType> = ({pictures}) => {
    return (
        <div className='flex flex-col items-center xs:flex-row sm:flex-col imgScreem:flex-row justify-between pt-4 pb-14'>
            {pictures ? pictures.map(i => <img className='h-44 w-56 rounded-md mb-4' src={i} key={uuid()} />) : ''}
        </div>
    )
}