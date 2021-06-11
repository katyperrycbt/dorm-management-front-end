import * as api from '../api';

export const getAvaiRoom = async (type) => {
    try {
        let {data} = await api.getAvaiRoom(type);
        console.log('roomsss', data);
        data = data.data;
        console.log('ddddd', data);
        return data ? data: [];
    } catch (error) {
        return {message: error.response.data.message}
    }
}

export const getRoomBill = async (name, howLong) => {
    try {
        // const {data} = await api.getRoomBill(type, howLong);
        const data = {unit_price: 500000, total: 3500000};
        return data;
    } catch (error) {
        return {message: error.response.data.message}

    }
}