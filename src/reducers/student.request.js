import { STUDENT_REQUEST_FIX, 
    STUDENT_REQUEST_RETURN, 
    STUDENT_GET_FIX_REQUEST, 
    STUDENT_GET_RETURN_REQUEST } from '../constants/constants'

const studentRequest = (studentRequest = [], action) => {
    switch(action.type) {
        case STUDENT_GET_FIX_REQUEST:
        case STUDENT_GET_RETURN_REQUEST:
            return action?.data ? action.data: studentRequest;
        case STUDENT_REQUEST_FIX:
        case STUDENT_REQUEST_RETURN:
            return [...studentRequest, action.data];
        default:
            return studentRequest;
    }
}

export default studentRequest;