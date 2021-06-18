import {
    GET_ALL_STUDENTS_WITH_THEIR_ROOM_INFO,
} from '../constants/constants';

const getAllStudentsWithTheirRoomInfo = (getAllStudentsWithTheirRoomInfo = [], action) => {
    switch (action.type) {
        case GET_ALL_STUDENTS_WITH_THEIR_ROOM_INFO:
            return action?.data ? action.data : getAllStudentsWithTheirRoomInfo;
        default:
            return getAllStudentsWithTheirRoomInfo;
    }
}

export default getAllStudentsWithTheirRoomInfo;