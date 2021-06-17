import {RECOVERY} from '../constants/constants';

const recovery = (recovery = {}, action) => {
    switch (action.type) {
        case RECOVERY:
            return action?.data ? action.data : recovery;
        default:
            return recovery;
    }
}

export default recovery;
