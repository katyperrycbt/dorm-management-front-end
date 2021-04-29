import {ADD_RETURN_REQUEST, REMOVE_RETURN_REQUEST} from '../constants/constants';

const returnRoom = (returnRoom = {}, action) => {
    switch (action.type){
        case ADD_RETURN_REQUEST:
            return {returnRoom: action?.data};
        case REMOVE_RETURN_REQUEST:
            return {returnRoom: {}};
        default:
            return returnRoom;
    }
}

export default returnRoom;