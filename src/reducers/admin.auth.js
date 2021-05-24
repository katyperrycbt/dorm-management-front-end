import {ADMIN_SIGN_IN, ADMIN_SIGN_OUT, ADMIN_EDIT_ACCOUNT} from '../constants/constants';

const adminAuth = (adminAuth = {}, action) => {
    switch (action.type) {
        case ADMIN_SIGN_IN:
        case ADMIN_EDIT_ACCOUNT:
            return action?.data ? action.data : adminAuth;
        case ADMIN_SIGN_OUT:
            localStorage.clear();
            return {};
        default:
            return adminAuth;
    }
}

export default adminAuth;

