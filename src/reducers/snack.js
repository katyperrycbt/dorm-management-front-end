import {SET_SNACK} from '../constants/constants'

const snack = (snack = {open: false, msg: ''}, action) => {
    switch (action.type) {
        case SET_SNACK:
            return action.data;
        default:
            return snack;
    }
}

export default snack