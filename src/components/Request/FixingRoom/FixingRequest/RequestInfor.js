export const ADD_TO_REQUEST_LIST = 'Add to request list';
export const REMOVE_FROM_REQUEST_LIST = 'Remove from request list';
export const EMPTY_LIST = 'Empty the list';
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const APPROVE = 'approve';
export const WAIT_FOR_APPROVE = 'wait for approve';
export const DISAPPROVE = 'disapprove';
export const ADD_RETURN = 'add return';
export const REMOVE_RETURN = 'remove return';

export const EMPTY_THE_LIST = () => ({
    type: EMPTY_LIST
});

export const ADD_TO_LIST = () => ({
    type: ADD_TO_REQUEST_LIST
});

export const REMOVE_FROM_LIST = () => ({
    type: REMOVE_FROM_REQUEST_LIST
});

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const approve = () => ({
    type: APPROVE
});

export const wait_for_approve =() => ({
    type: WAIT_FOR_APPROVE
});

export const disapprove = () => ({
    type: DISAPPROVE
});

export const addReturn = () => ({
    type: ADD_RETURN
})

export const removeReturn = () => ({
    type: REMOVE_RETURN
});

const initialState = {
    list: [],
    id: 0,
    approve: true,
    status: true,
    ReturnInfor: [],
    return_id: 0,
}

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_REQUEST_LIST:
            return {
                ...state,
                list: [...state.list, action.item],
                id: state.id + 1,
                // ReturnInfor: [...state.ReturnInfor, action.request],
                // approve: true,
                // status: true, Add to the list then change the value
            };
        case REMOVE_FROM_REQUEST_LIST:
                const index = state.list.findIndex((request) => request.id === action.id);
                let newList = [...state.list];
                // let newID = state.id;
                if ((index >= 0)){
                    newList.splice(index, 1);
                }
                else {
                    console.warn("Can't remove the request as it's not in the list anymore");
                }
                return{
                    ...state,
                    list: newList,
                };
        case EMPTY_LIST:
            return{
                ...state,
                list: []
            };
        case DISAPPROVE:
            const index_approve = state.list.findIndex((request) => request.id === action.id);
            if((index_approve >= 0) && (state.list[index_approve].approve == true)){
                state.list[index_approve].approve = false;
                console.log(state.list[index_approve].approve);
            }
            else{
                console.warn(index_approve);
            }
            return {...state};
        case ADD_RETURN:
            return {
                ...state,
                ReturnInfor: [...state.ReturnInfor, action.request],
                return_id: state.return_id + 1,
            }
        case REMOVE_RETURN:
            const remove_index = state.ReturnInfor.findIndex((Return) => Return.return_id === action.return_id)
            let NewReturn = [...state.ReturnInfor];
            if(remove_index >= 0){
                NewReturn.splice(remove_index, 1);
            }
            else{
                console.log('This returning request is no longer available');
            }
            return{
                ...state,
                ReturnInfor: NewReturn,
            };
        // case APPROVE:
        //     return{
        //         ...state,
        //         approve: true,
        //     };
        // case WAIT_FOR_APPROVE:
        //     return{
        //         ...state,
        //         approve: false,
        //     };
        default:
            return state;
    }
}