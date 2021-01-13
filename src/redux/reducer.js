import {GET_JOB_DATA_PENDING,GET_JOB_DATA_SUCCESS,GET_JOB_DATA_FAILURE} from "./actionTypes"

export const initState = {
    JobData: [],
};


const JobReducer = (state = initState, {type, payload}) => { 
    switch (type) {
        case GET_JOB_DATA_SUCCESS:
            return {
                ...state,
                JobData: payload
            }
        default:
            return state
    }
}

export default JobReducer