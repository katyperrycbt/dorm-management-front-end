import {GET_DASHBOARD, EDIT_DASHBOARD, DELETE_DASHBOARD} from '../constants/constants';

const dashboard = (dashboard = [], action) => {
    switch(action.type) {
        case GET_DASHBOARD:
            return action.data;
        case EDIT_DASHBOARD:
            return dashboard.map((item) => item.id === action.data.id ? action.data : item);
        case DELETE_DASHBOARD:
            return dashboard.filter((item) => item._id !== action.data);
        default:
            return dashboard;
    }
}

export default dashboard;