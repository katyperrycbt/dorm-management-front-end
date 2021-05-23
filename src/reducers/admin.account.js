import {GET_ADMIN_ACCOUNT, EDIT_ADMIN_ACCOUNT} from '../constants/constants';

const adminAccount = (adminAccount = {}, action) => {
    switch(action.type) {
        case GET_ADMIN_ACCOUNT:
            return action.data ? action.data : adminAccount;
        case EDIT_ADMIN_ACCOUNT:
            return action.data ? action.data : adminAccount;
        default:
            return adminAccount;
    }
}

export default adminAccount;