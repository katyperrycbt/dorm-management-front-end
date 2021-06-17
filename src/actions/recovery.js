import * as api from '../api/index';

export const sendRecovery = (email) => async (dispatch) => {
    try {
        const {data} = await api.sendRecovery(email);
        console.log('token from backend', data)
        return data;
    } catch (error) {
        return  {message: error.response.data.error}
    }
}

export const updatePassword = (formData) => async (dispatch) => {
    try {
        const {data} = await api.updatePassword(formData);

        return data;
    } catch (error) {
        return  {message: error.response.data.error}

    }
}

