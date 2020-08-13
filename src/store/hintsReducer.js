const SHOW_HINT_QUANTITY = 'SHOW_HINT_QUANTITY',
SHOW_HINT_WRONG = 'SHOW_HINT_WRONG',
HIDE_HINTS = 'HIDE-HINTS';

const stateDefault = {
    hintQuantityVisible: false,
    hintWrongVisible: false
}
const hintsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case (SHOW_HINT_QUANTITY): {
            return {...state, hintQuantityVisible: true}
        }
        case (SHOW_HINT_WRONG): {
            return {...state, hintWrongVisible: true}
        }
        case (HIDE_HINTS): {
            return {...state, hintWrongVisible: false, hintQuantityVisible: false}
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
export const hideHints = () => {
    return { type: HIDE_HINTS }
}

export default hintsReducer;