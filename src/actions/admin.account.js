import * as api from '../api/index';

import { GET_ADMIN_ACCOUNT, EDIT_ADMIN_ACCOUNT } from '../constants/constants';

export const getAdminAccount = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminAccount();

        return dispatch({ type: GET_ADMIN_ACCOUNT, data });
    } catch (error) {
        return { message: error.response.data.message }
    }
}

export const editAdminAccount = (formData) => async (dispatch) => {
    try {
        const {data} = await api.adminEditAccount(formData);

        return dispatch({type: EDIT_ADMIN_ACCOUNT, data})
    } catch (error) {
        return {message: error.response.data.message}
    }
}