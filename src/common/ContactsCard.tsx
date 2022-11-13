import { FC } from "react";
import { LocationSign } from "./signs";

type PropsType = {
    name: string
    address: string
    phone: string
    email: string
}

export const ContactsInformationCard: FC<PropsType> = ({name, address, phone, email}) => {
    return (
        <div className='py-8 px-16  bg-[#2A3047] text-[#E7EAF0]'>
            <h4 className='font-bold text-[#E7EAF0] pb-4'>{name}.</h4>
            <div className='flex items-center sm:items-start '>
               <LocationSign width="15" height="25"/> <div className='text-[#E7EAF0] ml-2 sm:text-[#E8EBF3] sm:font-["Roboto"]'>{address}.</div>
            </div>
            <div className='text-white opacity-60 sm:opacity-100 sm:text-[#E8EBF3] sm:font-["Roboto"]'>{phone},</div>
            <div className='text-white opacity-60 sm:opacity-100 sm:text-[#E8EBF3] sm:font-["Roboto"]'>{email}</div>
        </div>
    )
}