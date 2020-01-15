
const counterReducer = (state = 0, action) => {

    switch(action.type){
        case 'INCREMENT':
            return + 1;
        case 'DECREMENT':
            return -1
        default:
            return state
    }
}

export default counterReducer;