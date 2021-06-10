import * as api from '../api/index';

import { GET_ADMIN_INFO, EDIT_ADMIN_INFO } from '../constants/constants';

export const getAdminInfo = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminInfo();
        console.log('adminnn inforrrr', data);
        return dispatch({ type: GET_ADMIN_INFO, data });
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const editAdminInfo = (formData) => async (dispatch) => {
    try {
        const { data } = await api.editAdminInfo(formData);
        console.log('qpslam', data)
        return dispatch({ type: EDIT_ADMIN_INFO, data });
    } catch (error) {
        return { message: error.response.data.error }
    }
}