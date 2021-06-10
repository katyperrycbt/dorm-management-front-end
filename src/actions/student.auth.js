import * as api from '../api/index';
import {STUDENT_SIGN_IN, STUDENT_SIGN_OUT, STUDENT_EDIT_ACCOUNT} from '../constants/constants';

export const studentSignIn = (formData, remember) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData, remember);
        console.log('student data', data);
        return dispatch({ type: STUDENT_SIGN_IN, data });

    } catch (error) {
        return {message: error.response.data.error};
    }
}

export const studentSignOut = () => async (dispatch) => {
    try {
        return dispatch({type: STUDENT_SIGN_OUT, data: {}})
    } catch (error) {
        return {message: 'Oops! Try again!'}
    }
}

export const studentEditAccount = (formData) => async (dispatch) => {
    try {
        const {data} = await api.studentEditAccount(formData);

        return dispatch({type: STUDENT_EDIT_ACCOUNT, data});
    } catch (error) {
        return {message: error.response.data.message}
    }
}

export const studentGetAccount = () => async (dispatch) => {
    try {
        const {data} = await api.getStudentAccount();

        return dispatch({type: STUDENT_SIGN_IN, data})
    } catch (error) {
        return {message: error.response.data.message}
    }
}