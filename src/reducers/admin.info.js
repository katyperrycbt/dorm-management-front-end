import { GET_ADMIN_INFO, EDIT_ADMIN_INFO } from '../constants/constants';

const adminInfo = (adminInfo = {}, action) => {
    switch(action.type) {
        case GET_ADMIN_INFO:
            return action.data ? action.data : adminInfo;
        case EDIT_ADMIN_INFO:
            return action.data ? action.data : adminInfo;
        default:
            return adminInfo;
    }
}

export default adminInfo;