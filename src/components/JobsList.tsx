import { FC } from "react"
import { JobItem } from "./JobItem"

export type JobDataType = {
    id: string
    name: string
    address: string
    benefits: Array<string>
    createdAt: string
    description: string
    email: string
    employment_type: Array<string>
    location: LocationType
    phone: string
    pictures: Array<string>
    salary: string
    title: string
    updatedAt: string

}

export type LocationType = {
    lat: number
    long: number
}

type PropsType = {
    jobsData: Array<JobDataType>|null
    choseJobElementHandler: (chosenEl: JobDataType) => void
}

export const JobsList: FC<PropsType> = ({ jobsData, choseJobElementHandler }) => {
    return (
        <div className='container mx-auto'>
            {jobsData ? jobsData.map(j => <JobItem key={j.id}
                id={j.id}
                address={j.address}
                name={j.name}
                benefits={j.benefits}
                createdAt={j.createdAt}
                description={j.description}
                email={j.email}
                employment_type={j.employment_type}
                location={j.location}
                phone={j.phone}
                pictures={j.pictures}
                salary={j.salary}
                title={j.title}
                updatedAt={j.updatedAt}
                choseJobElementHandler={choseJobElementHandler}
            />) : 'hello'}
        </div>
    )
}