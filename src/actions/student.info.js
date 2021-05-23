import * as api from '../api/index';

import { GET_STUDENT_INFO, EDIT_STUDENT_INFO } from '../constants/constants';

export const getAdminInfo = () => async (dispatch) => {
    try {
        const { data } = await api.getStudentInfo();

        return dispatch({ type: GET_STUDENT_INFO, data });
    } catch (error) {
        return { message: error.response.data.message }
    }
}

export const editAdminInfo = (formData) => async (dispatch) => {
    try {
        const { data } = await api.editStudentInfo(formData);

        dispatch({ type: EDIT_STUDENT_INFO, data });
    } catch (error) {
        return { message: error.response.data.message }
    }
}