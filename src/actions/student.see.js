import * as api from '../api';

import {
    STUDENT_SEE_DATA,
    STUDENT_SEE_RESIDENT,
    STUDENT_SEE_BILLS,
    STUDENT_SEE_NOTIFICATIONS
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
            case STUDENT_SEE_RESIDENT:
                data = (await api.getResidentInfo()).data;
                break;
            case STUDENT_SEE_BILLS:
                data = (await api.getBill()).data;
                break;
            case STUDENT_SEE_NOTIFICATIONS:
                data = (await api.getAnnouncementAndEMail()).data;
                return;
            default:
                data = undefined;
        }

        return dispatch({type: STUDENT_SEE_DATA, data})

    } catch (error) {
        return {message: error.response.data.message}
    }
}

