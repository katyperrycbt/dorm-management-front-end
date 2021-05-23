import * as api from '../api/index';

export const login = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: 'LOGIN', data });

        return data;

    } catch (error) {
        dispatch({ type: 'LOGIN', error: {message: error} });

        return {message: error.response.data.error};
    }
}