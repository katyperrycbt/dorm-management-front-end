import * as api from '../api';

import {ADMIN_SIGN_UP_ADMIN, ADMIN_SIGN_UP_STUDENT} from '../constants/constants';

export const adminSignUpAdmin = (formData) => async (dispatch) => {
    try {
        const {data} = await api.createAdminAccount(formData);

        return dispatch({type: ADMIN_SIGN_UP_ADMIN, data});
    } catch (error) {
        return {message: error.response.data.message}
    }
}

export const adminSignUpStudent = async (formData) => {
    try {
        const  {data} = await api.adminCreateStudentAccount(formData);
        console.log(data);

        return data;
        // return dispatch({type: ADMIN_SIGN_UP_ADMIN, data});
    } catch (error) {
        return {message: error.response.data.error}
    }
}