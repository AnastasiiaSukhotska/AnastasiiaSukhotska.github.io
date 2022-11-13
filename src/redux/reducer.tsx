import {InferActionsTypes, BaseThunkType} from './state';
import { jobAPI } from "../api/api";


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

const SET_JOBS_DATA = 'SET_JOBS_DATA';
const SET_CHOSEN_JOB = 'SET_CHOSEN_JOB';
const RETURN_TO_LIST = 'RETURN_TO_LIST';

export const actions = {
    setJobsData: (jobsData: Array<JobDataType>) => ({ type: SET_JOBS_DATA, jobsData } as const),
    setChosenJobElement: (jobElement: JobDataType) => ( {type: SET_CHOSEN_JOB, jobElement} as const),
    returnToList: () => ({type: RETURN_TO_LIST} as const)
}

export const requestJobsData = (): ThunkType => {
    return async (dispatch) => {
        let data = await jobAPI.getData();
        dispatch(actions.setJobsData(data))
    }
} 

const initialState = {
    jobsData: [] as Array<JobDataType>,
    chosenJobElement: null as null|JobDataType
}

type InitialStateType = typeof initialState;

export const reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case SET_JOBS_DATA: {
            return {...state, jobsData: action.jobsData}
        }
        case SET_CHOSEN_JOB: {
            return {...state, chosenJobElement: action.jobElement}
        }
        case RETURN_TO_LIST: {
            return {...state, chosenJobElement: null}
        }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>;
export type ThunkType = BaseThunkType<ActionsType>;