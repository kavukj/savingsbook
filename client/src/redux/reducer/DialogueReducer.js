const INITIAL_STATE = {
    open: false
}

const DialogueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_OPEN':
            return {
                ...action,
                open: !state.open
            }
        default:
            return state
    }
}

export default DialogueReducer;