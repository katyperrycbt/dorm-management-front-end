import {SET_LINEAR} from '../constants/constants'

const linear = (linear = false, action) => {
    switch (action.type) {
        case SET_LINEAR:
            return action.data;
        default:
            return linear;
    }
}

export default linear