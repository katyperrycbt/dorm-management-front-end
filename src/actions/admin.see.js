import * as api from '../api';

import {
    ADMIN_SEE_DATA,
    ADMIN_SEE_NOTIFICATION,
} from '../constants/constants'

export const see = (seeWhat) => async (dispatch) => {
    /**
     * It can be 1 of these
     *          1. resident
     *          2. bills
     *          3. notifications
     */
    try {
        let data
        switch (seeWhat) {
            case ADMIN_SEE_NOTIFICATION:
                data = (await api.adminGetAnnouncementAndEMail()).data;
                break;
            default:
                data = undefined;
        }

        return dispatch({type: ADMIN_SEE_DATA, data})

    } catch (error) {
        return {message: error.response.data.message}
    }
}
