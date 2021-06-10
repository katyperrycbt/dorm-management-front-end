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
                const temp = (await api.getResidentInfo()).data;

                console.log('resident info', temp)
                data = temp.stayindorm;
                console.log('data resident', data)
                break;
            case STUDENT_SEE_BILLS:
                console.log('reach bill');
                const roomID = JSON.parse(localStorage.getItem('user')).user.room;
                console.log(roomID);
                const temp2 = (await api.getBill(roomID)).data;
           

                const prepareData = [
                    [...temp2.bill],
                    [...temp2.utilityBill]
                ]

                data = prepareData;

                break;
            case STUDENT_SEE_NOTIFICATIONS:
                data = (await api.getAnnouncementAndEMail()).data;
                return;
            default:
                data = undefined;
        }

        return dispatch({type: STUDENT_SEE_DATA, data})

    } catch (error) {
        console.log(error);
        return {message: error.response.data.message}
    }
}

