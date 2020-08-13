const SHOW_HINT_QUANTITY = 'SHOW_HINT_QUANTITY',
SHOW_HINT_WRONG = 'SHOW_HINT_WRONG';

const stateDefault = {
    hintQuantityVisible: true,
    hintWrongVisible: true
}
const hintsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case (SHOW_HINT_QUANTITY): {
            return {...state, hintQuantityVisible: true}
        }
        case (SHOW_HINT_WRONG): {
            return {...state, hintWrongVisible: true}
        }
        default: break;
    }
    return state;
}
export const showHintQuantity = () => {
    return { type: SHOW_HINT_QUANTITY }
}
export const showHintWrong = () => {
    return { type: SHOW_HINT_WRONG }
}

export default hintsReducer;