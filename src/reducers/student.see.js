import {
    STUDENT_SEE_DATA,
} from '../constants/constants'

const studentSee = (studentSee = [], action) => {
    switch (action.type) {
        case STUDENT_SEE_DATA:
            return action?.data ? action.data : studentSee;
        default:
            return studentSee;
    }
}

export default studentSee;