import {GET_ADMIN_ACCOUNT, EDIT_ADMIN_ACCOUNT} from '../constants/constants';

const adminAccount = (adminAccount = {}, action) => {
    switch(action.type) {
        case GET_ADMIN_ACCOUNT:
            // return {_id: "60aa646412ce8438c0433624", email: "pqslam@gmail.com", name: "Phan Quoc Son Lam"};

            return action.data ? action.data : adminAccount;
        case EDIT_ADMIN_ACCOUNT:
            return action.data ? action.data : adminAccount;
        default:
            return adminAccount;
    }
}

export default adminAccount;