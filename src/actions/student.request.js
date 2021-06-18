import * as api from '../api'

import { STUDENT_REQUEST_FIX, STUDENT_REQUEST_RETURN, STUDENT_GET_FIX_REQUEST, STUDENT_GET_RETURN_REQUEST, STUDENT_DELETE_REQUEST_FIX } from '../constants/constants'

export const studentRequestFix = (formData) => async (dispatch) => {
    try {
        const {data} = await api.requestFix(formData);

        return dispatch({type: STUDENT_REQUEST_FIX, data});
    } catch (error) {
        return {message: error.response.data.error}
    }
}

export const studentRequestReturn = (formData) => async (dispatch) => {
    try {
        const {data} = await api.requestReturn(formData);

        return dispatch({type: STUDENT_REQUEST_RETURN, data});

    } catch (error) {
        return {message: error.response.data.error}

    }
}

export const studentGetRequestFix = () => async (dispatch) => {
    try {
        const {data} = await api.getRequestFix();
        console.log('request fix ', data);
        return dispatch({type: STUDENT_GET_FIX_REQUEST, data});

    } catch (error) {
        return {message: error.response.data.error}

    }
}

export const studentGetRequestReturn = () => async (dispatch) => {
    try {
        const {data} = await api.getRequestReturn();

        console.log('request return ', data);
        
        return dispatch({type: STUDENT_GET_RETURN_REQUEST, data});

    } catch (error) {
        return {message: error.response.data.error}

    }
}

export const studentDeleteRequestFix = (id) => async (dispatch) => {
    try {
        await api.removeRequestFix(id);

        return dispatch({type: STUDENT_DELETE_REQUEST_FIX, data: id})
    } catch (error) {
        return {message: error.response.data.error}
    }
}