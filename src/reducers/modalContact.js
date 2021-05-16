import { OPEN, CLOSE } from '../constants/constants';

export const open = () => ({
    type: OPEN
});

export const close = () => ({
    type: CLOSE
})

const modalContact = (modalContact = {openState: false}, action) => {
    switch(action.type){
        case OPEN:
            return { ...modalContact, openState: true};
        case CLOSE:
            return { ...modalContact, openState: false};
        default:
            return modalContact;
    }
}

export default modalContact;