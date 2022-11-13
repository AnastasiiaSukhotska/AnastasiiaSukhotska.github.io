import moment from "moment";
import { FC, useEffect, useState } from "react";
import { JobDataType } from "../redux/reducer";
import { LocationSign, SaveSign } from "../common/signs";
import { StarsSign } from "../common/StarsSign";


export const JobItem: FC<JobDataType & { choseJobElementHandler: (chosenEl: JobDataType) => void }> = ({ name, id, email, address,
    benefits, createdAt, description,
    employment_type, location,
    phone, pictures, salary, title, updatedAt,
    choseJobElementHandler }) => {

    const [countryAddress, setCountryAddress] = useState(null);
    let date = moment(createdAt).fromNow();
    const choseJobElement = (chosenEl: JobDataType) => {
        choseJobElementHandler(chosenEl);
    }

    const getLocation = (lat: number, lng: number) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCMw-qmPiIoRy7gQqaDOenf4m8qXC86tQo`)
            .then((response) => {
                return response.json();
            }).then(jsonData => {
                if (jsonData.results.length > 1) {
                    for (let i = 0; i < jsonData.results.length; i++) {
                        if (jsonData.results[i].types.includes('administrative_area_level_1') && jsonData.results[i].types.includes("political")) {
                            setCountryAddress(jsonData.results[i].formatted_address);
                            return
                        }
                    }
                    for (let i = 0; i < jsonData.results.length; i++) {
                        if (jsonData.results[i].types.includes('country') && jsonData.results[i].types.includes("political")) {
                            setCountryAddress(jsonData.results[i].formatted_address);
                            return
                        }
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getLocation(location.lat, location.long);
    }, [location])

    return (
        <div className='flex flex-col-reverse sm:flex-row px-6 py-4 my-2 bg-cardBgc sm:bg-[#FFFFFF] rounded-lg shadow shadow-black-800 min-h-[165px]' onClick={() => {
            choseJobElement({
                name, id, email, address,
                benefits, createdAt, description,
                employment_type, location,
                phone, pictures, salary, title, updatedAt
            })
        }}>
            <div className="sm:basis-9/12  grid grid-cols-12">
                <div className='col-span-3 pr-5 '>
                    <img src={pictures[0]} className='rounded-full w-[85px] h-[85px] ' />
                </div>
                <div className='col-span-9 flex flex-col justify-between'>
                    <div className='text-xl text-slate-700 sm:font-bold'>{title}</div>
                    <div className='text-base text-slate-400 py-3 text-[#878D9D]'>{`${name} · ${address}`}</div>
                    <div className='text-base text-slate-400 flex items-center'>
                        <LocationSign />
                        <span className='ml-2 text-[#878D9D]'>{countryAddress ? countryAddress : 'Unknown location'}</span></div>
                </div>
            </div>
            <div className='sm:basis-3/12 grid grid-cols-12 items-center text-sm pb-4'>
                <StarsSign />
                <div className='col-span-4 sm:h-full flex justify-end sm:flex-col sm:justify-between sm:items-end text-[#878D9D]'>
                    <div className="hidden sm:block">
                        <SaveSign />
                    </div>
                    <span className='flex flex-row justify-end w-full'>
                        Posted {date}
                    </span>
                </div>
            </div>
        </div>
    )
}