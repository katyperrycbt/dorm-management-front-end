import * as api from '../api';
import { GET_ALL_STUDENTS_WITH_THEIR_ROOM_INFO } from '../constants/constants';

export const getAvaiRoom = async (type) => {
    try {
        let { data } = await api.getAvaiRoom(type);
        console.log('roomsss', data);
        data = data.data;
        console.log('ddddd', data);
        return data ? data : [];
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const getRoomBill = async (name, howLong) => {
    try {
        // const {data} = await api.getRoomBill(type, howLong);
        const data = { unit_price: 500000, total: 3500000 };
        return data;
    } catch (error) {
        return { message: error.response.data.error }

    }
}

export const getAllStudentsWithTheirRoomInfo = () => async (dispatch) => {
    try {
        const { data } = await api.getAllStudentsWithTheirRoomInfo();

        return dispatch({ type: GET_ALL_STUDENTS_WITH_THEIR_ROOM_INFO, data })
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const updateStudentRoom = async (formData) => {
    try {
        const { data } = await api.updateStudentRoom(formData);
        console.log('đổi phòng trả về ', data);
        return data ? data : {}
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const deactivateAccount = async (formData) => {
    try {
        const { data } = await api.deactivateAccount(formData);

        return data ? data : {}
    } catch (error) {
        return { message: error.response.data.error }

    }
}

export const activateAccount = async (formData) => {
    try {
        const { data } = await api.activateAccount(formData);

        return data ? data : {}
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const getAllRoom = async () => {
    try {
        const { data } = await api.getAllRoom();

        return data ? data : []
    } catch (error) {
        return { message: error.response.data.error }
    }
}

export const createUtilityBill = async (formData) => {
    try {
        const {data} = await api.createUtilityBill(formData);

        return data ? data : {}
    } catch (error) {
        return { message: error.response.data.error }

    }
}