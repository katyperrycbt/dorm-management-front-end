import {
    STUDENT_REQUEST_FIX,
    STUDENT_GET_FIX_REQUEST,
} from '../constants/constants'

const studentRequestFix = (studentRequestFix = [], action) => {
    switch (action.type) {
        case STUDENT_GET_FIX_REQUEST:
            return action?.data ? action.data : studentRequestFix;
        case STUDENT_REQUEST_FIX:
            return action?.data ? [...studentRequestFix, action.data] : studentRequestFix;
        default:
            return studentRequestFix;
    }
}

export default studentRequestFix;