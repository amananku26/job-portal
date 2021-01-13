import {GET_JOB_DATA_PENDING,GET_JOB_DATA_SUCCESS,GET_JOB_DATA_FAILURE} from "./actionTypes"
import axios from 'axios'   

export const setJobData = (payload) => ({type: GET_JOB_DATA_SUCCESS, payload});


export const getJobData = () => dispatch => {
    return axios.get("http://localhost:5000")
    .then(res=>  (dispatch(setJobData(res))))
    // .catch(err=>dispatch(loginfailure(err)))
}   