import {
    STUDENT_REQUEST_RETURN,
    STUDENT_GET_RETURN_REQUEST
} from '../constants/constants'

const studentRequestReturn = (studentRequestReturn = [], action) => {
    switch (action.type) {
        case STUDENT_GET_RETURN_REQUEST:
            return action?.data ? action.data : studentRequestReturn;
        case STUDENT_REQUEST_RETURN:
            return action?.data ? [...studentRequestReturn, action.data] : studentRequestReturn;
        default:
            return studentRequestReturn;
    }
}

export default studentRequestReturn;