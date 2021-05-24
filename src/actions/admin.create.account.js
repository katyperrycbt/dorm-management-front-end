import * as api from '../api';

import {ADMIN_SIGN_UP_ADMIN} from '../constants/constants';

export const adminSignUpAdmin = (formData) => async (dispatch) => {
    try {
        const {data} = await api.createAdminAccount(formData);

        return dispatch({type: ADMIN_SIGN_UP_ADMIN, data});
    } catch (error) {
        return {message: error.response.data.message}
    }
}