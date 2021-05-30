import { GET_STUDENT_INFO, EDIT_STUDENT_INFO } from '../constants/constants';

const studentInfo = (studentInfo = {}, action) => {
    switch(action.type) {
        case GET_STUDENT_INFO:
            //set action.data to local storage 
            return action.data ? action.data : studentInfo;
        case EDIT_STUDENT_INFO:
            return action.data ? action.data : studentInfo;
        default:
            return studentInfo;
    }
}

export default studentInfo;