import * as api from '../api';

import {ADMIN_SIGN_IN, ADMIN_SIGN_OUT, ADMIN_EDIT_ACCOUNT} from '../constants/constants';

export const adminSignIn = (formData, remember) => async (dispatch) => {
    try {
        
        // const {data} = await api.adminSignIn(formData, remember);
        const data = undefined;
        const fakeData = {
            token: 'dwdsadwszdqwsz',
            user: {
                email: 'abc@gmail.com',
                password: 'thisishashedpassword',
                name: 'abc',
                age: '20'
            }
        }

        return dispatch({type: ADMIN_SIGN_IN, data: data || fakeData});

    } catch (error) {
        console.log(error);
        return {message: error.response.data.message}
    }
}

export const adminSignOut = () => async (dispatch) => {
    try {
        return dispatch({type: ADMIN_SIGN_OUT, data: {}})
    } catch (error) {
        return {message: 'Oops! Try again!'}
    }
}

export const adminEditAccount = (formData) => async (dispatch) => {
    try {
        const {data} = await api.adminEditAccount(formData);

        return dispatch({type: ADMIN_EDIT_ACCOUNT, data});
    } catch (error) {
        return {message: error.response.data.message}
    }
}

export const adminGetAccount = () => async (dispatch) => {
    try {
        const {data} = await api.getAdminAccount();

        return dispatch({type: ADMIN_SIGN_IN, data})
    } catch (error) {
        return {message: error.response.data.message}
    }
}

