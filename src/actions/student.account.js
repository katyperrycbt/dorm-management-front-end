import * as api from '../api/index';

import { GET_STUDENT_ACCOUNT, EDIT_STUDENT_ACCOUNT } from '../constants/constants';

export const getStudentAccount = () => async (dispatch) => {
    try {
        const { data } = await api.getStudentAccount();

        return dispatch({ type: GET_STUDENT_ACCOUNT, data });
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const editStudentAccount = (formData) => async (dispatch) => {
    try {
        const {data} = await api.studentEditAccount(formData);

        return dispatch({type: EDIT_STUDENT_ACCOUNT, data})
    } catch (error) {
        return {message: error.response.data.error}
    }
}