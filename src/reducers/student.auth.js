import {STUDENT_SIGN_IN, STUDENT_SIGN_OUT, STUDENT_EDIT_ACCOUNT} from '../constants/constants';

const studentAuth = (studentAuth = {}, action) => {
    switch (action.type) {
        case STUDENT_SIGN_IN:
        case STUDENT_EDIT_ACCOUNT:
            return action?.data ? action.data : studentAuth;
        case STUDENT_SIGN_OUT:
            localStorage.clear();
            return {};
        default:
            return studentAuth;
    }
}

export default studentAuth;
