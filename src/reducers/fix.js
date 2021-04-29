import {ADD_FIX_REQUEST, REMOVE_FIX_REQUEST} from '../constants/constants';

const fix = (fixes = [], action) => {
    switch (action.type){
        case ADD_FIX_REQUEST:
            return [...fixes, action?.data];

        case REMOVE_FIX_REQUEST:
            return fixes.filter((fix) => fix._id !== action?.data);
        default:
            return [...fixes];
    }
}

export default fix;