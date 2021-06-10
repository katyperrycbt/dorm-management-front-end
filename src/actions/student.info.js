import * as api from '../api/index';

import { GET_STUDENT_INFO, EDIT_STUDENT_INFO } from '../constants/constants';

export const getStudentInfo = () => async (dispatch) => {
    try {
        const { data } = await api.getStudentInfo();

        // const data = {
            
        // }
        console.log('get student info', data)
        return dispatch({ type: GET_STUDENT_INFO, data });
    } catch (error) {
        return { message: error.response.data.message }
    }
}

export const editStudentInfo = (formData) => async (dispatch) => {
    try {
        const { data } = await api.editStudentInfo(formData);

        dispatch({ type: EDIT_STUDENT_INFO, data });
    } catch (error) {
        return { message: error.response.data.message }
    }
}