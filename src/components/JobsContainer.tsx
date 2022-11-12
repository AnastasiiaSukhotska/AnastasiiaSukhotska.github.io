import { FC, useEffect } from "react";
import { JobsList } from "../components/JobsList";
import { AppStateType } from '../redux/state';
import { requestJobsData, actions, JobDataType } from '../redux/reducer'
import { connect } from "react-redux";
import { compose } from "redux";
import { Navigate } from "react-router";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    jobsData: Array<JobDataType>
    chosenJobElement: JobDataType | null
}

type MapDispatchToPropsType = {
    requestJobsData: () => void,
    setChosenJobElement: (jobElement: JobDataType) => void,
    returnToList: () => void
}

const JobsContainer: FC<PropsType> = (props) => {

    useEffect(() => {
        props.requestJobsData();
    }, []);

    const choseJobElementHandler = (chosenEl: JobDataType) => {
        props.setChosenJobElement(chosenEl)
    }

    const unchoseJobElementHandler = () => {
        props.returnToList()
    }

    if (props.chosenJobElement) {
        return <Navigate to='/chosenJob' />
    }
    return (
        <div className='py-5 px-4 w-full bg-mainBgc '>
            <JobsList jobsData={props.jobsData} choseJobElementHandler={choseJobElementHandler} />
        </div>
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        jobsData: state.jobsData,
        chosenJobElement: state.chosenJobElement
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { requestJobsData, setChosenJobElement: actions.setChosenJobElement, returnToList: actions.returnToList }))
    (JobsContainer);