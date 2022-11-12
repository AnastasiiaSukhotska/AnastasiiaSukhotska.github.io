import { FC } from "react"
import { JobDataType } from "../redux/reducer"
import { JobItem } from "./JobItem"


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
            />) : 'Loading...'}
        </div>
    )
}