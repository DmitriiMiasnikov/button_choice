const TOGGLE_SELECTED = 'TOGGLE-SELECTED',
SET_UNSELECTED = 'SET-UNSELECTED',
CHECK_ANSWER = 'CHECK-ANSWER',
ACTIVATE_BUTTON_SUBMIT = 'ACTIVATE-BUTTON-SUBMIT',
DEACTIVATE_BUTTON_SUBMIT = 'DEACTIVATE-BUTTON-SUBMIT',
WRONG_BUTTON_SUBMIT = 'WRONG-BUTTON-SUBMIT';

const stateDefault = {
    buttons: [
        '5 + x = 11',
        '16 - x = 12',
        'x + 5 = 11',
        'x - 16 = 12'
    ],
    answer: [
        true,
        false,
        true,
        false
    ],
    answerIsRight: false,
    selected: null,
    buttonSubmitDisabled: true,
    buttonSubmitWrong: false,
}
const buttonsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case (SET_UNSELECTED): {
            return {...state, selected: state.buttons.map((el, i) => el = false)}
        }
        case (TOGGLE_SELECTED): {
            return {...state, selected: state.selected.map((el, i) => {
                if (i === action.id && el === true) {
                    return false
                } else if (i === action.id && el === false) {
                    return true
                } else if (i !== action.id) {
                    return el
                }
            })}
        }
        case (CHECK_ANSWER): {
            return {...state, answerIsRight: state.selected.every((el, i) => el === state.answer[i])}
        }
        case (ACTIVATE_BUTTON_SUBMIT): {
            return {...state, buttonSubmitDisabled: false }
        }
        case (DEACTIVATE_BUTTON_SUBMIT): {
            return {...state, buttonSubmitDisabled: true }
        }
        case (WRONG_BUTTON_SUBMIT): {
            return {...state, buttonSubmitWrong: state.buttonSubmitWrong ? true : false }
        }
        default: break;
    }
    return state;
}
export const toggleSelected = (id) => {
    return { type: TOGGLE_SELECTED, id }
}
export const setUnselected = () => {
    return { type: SET_UNSELECTED }
}
export const checkAnswer = () => {
    return { type: CHECK_ANSWER }
}
export const activateButtonSubmit = () => {
    return { type: ACTIVATE_BUTTON_SUBMIT }
}
export const deactivateButtonSubmit = () => {
    return { type: DEACTIVATE_BUTTON_SUBMIT }
}
export const toggleWrongButtonSubmit = () => {
    return { type: WRONG_BUTTON_SUBMIT }
}

export default buttonsReducer;