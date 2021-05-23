import { GET_STUDENT_ACCOUNT, EDIT_STUDENT_ACCOUNT } from '../constants/constants';

const studentAccount = (studentAccount = {}, action) => {
    switch(action.type) {
        case GET_STUDENT_ACCOUNT:
            return action.data ? action.data : studentAccount;
        case EDIT_STUDENT_ACCOUNT:
            return action.data ? action.data : studentAccount;
        default:
            return studentAccount;
    }
}

export default studentAccount;