import {
    STUDENT_REQUEST_FIX,
    STUDENT_GET_FIX_REQUEST,
    STUDENT_DELETE_REQUEST_FIX
} from '../constants/constants'

const studentRequestFix = (studentRequestFix = [], action) => {
    switch (action.type) {
        case STUDENT_GET_FIX_REQUEST:
            return action?.data ? action.data : studentRequestFix;
        case STUDENT_REQUEST_FIX:
            return action?.data ? [...studentRequestFix, action.data] : studentRequestFix;
        case STUDENT_DELETE_REQUEST_FIX:
            return studentRequestFix.filter(x => x._id !== action.data);
        default:
            return studentRequestFix;
    }
}

export default studentRequestFix;