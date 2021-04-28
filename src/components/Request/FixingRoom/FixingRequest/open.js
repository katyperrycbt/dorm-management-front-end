const OPEN ='open';
const CLOSE='close';

export const open = () =>({
    type: OPEN
});

export const close = () => ({
    type: CLOSE
});

const initialState = {
    openState: false
};

export default (state=initialState, action) => {
    switch(action.type){
        case OPEN:
            return {...state, openState: true};
        case CLOSE:
            return {...state, openState: false};
        default:
            return state;
    }
}