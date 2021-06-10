import * as api from '../api/index';

import { GET_DASHBOARD, EDIT_DASHBOARD, DELETE_DASHBOARD } from '../constants/constants';

export const getDashboard = (whatDatabase) => async (dispatch) => {
    try {
        const { data } = await api.getDatabase(whatDatabase);
        console.log('databaseeee', data);
        return dispatch({ type: GET_DASHBOARD, data});
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const editDashboard = (whatDatabase, oldRecordId, newRecord) => async (dispatch) => {
    try {
        // const { data } = await api.editRecord(whatDatabase, oldRecordId, newRecord);
        console.log('db ol new', whatDatabase, oldRecordId, newRecord);
        return dispatch({ type: EDIT_DASHBOARD, data: newRecord });
    } catch (error) {
        return { message: error.response.data.message }
    }
}

export const deleteDashboard = (whatDatabase, recordId) => async (dispatch) => {
    try {
        await api.deleteRecord(whatDatabase, recordId);

        return dispatch({ type: DELETE_DASHBOARD, data: recordId })
    } catch (error) {
        return { message: error.response.data.message }
    }
}