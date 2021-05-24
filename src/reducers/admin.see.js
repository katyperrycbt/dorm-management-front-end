import {
    ADMIN_SEE_DATA,
} from '../constants/constants'

const adminSee = (adminSee = [], action) => {
    switch (action.type) {
        case ADMIN_SEE_DATA:
            return action?.data ? action.data : adminSee;
        default:
            return adminSee;
    }
}

export default adminSee;