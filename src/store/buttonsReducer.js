const TOGGLE_SELECTED = 'TOGGLE-SELECTED',
    SET_UNSELECTED = 'SET-UNSELECTED',
    CHECK_ANSWER = 'CHECK-ANSWER',
    CHECK_ANSWER_ALL_CHOOSEN = 'CHECK-ANSWER-ALL-CHOOSEN',
    ACTIVATE_BUTTON_SUBMIT = 'ACTIVATE-BUTTON-SUBMIT',
    DEACTIVATE_BUTTON_SUBMIT = 'DEACTIVATE-BUTTON-SUBMIT',
    WRONG_BUTTON_SUBMIT = 'WRONG-BUTTON-SUBMIT',
    RIGHT_BUTTON_SUBMIT = 'RIGHT-BUTTON-SUBMIT';

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
    wrong: false,
    right: false,
    allRightVariantsChoosen: false
}
const buttonsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case (SET_UNSELECTED): {
            return { ...state, selected: state.buttons.map((el, i) => el = false) }
        }
        case (TOGGLE_SELECTED): {
            return {
                ...state, selected: state.selected.map((el, i) => {
                    if (i === action.id && el === true) {
                        return false
                    } else if (i === action.id && el === false) {
                        return true
                    } else if (i !== action.id) {
                        return el
                    }
                })
            }
        }
        case (CHECK_ANSWER): {
            return { ...state, answerIsRight: state.selected.every((el, i) => el === state.answer[i]) }
        }
        case (CHECK_ANSWER_ALL_CHOOSEN): {
            return {
                ...state,
                allRightVariantsChoosen: state.answer.some((el, i) => el !== state.selected[i] && el === true) &&
                    state.answer.some((el, i) => el === state.selected[i] && el === true)
            }
        }
        case (ACTIVATE_BUTTON_SUBMIT): {
            return { ...state, buttonSubmitDisabled: false }
        }
        case (DEACTIVATE_BUTTON_SUBMIT): {
            return { ...state, buttonSubmitDisabled: true }
        }
        case (WRONG_BUTTON_SUBMIT): {
            return { ...state, wrong: !state.wrong }
        }
        case (RIGHT_BUTTON_SUBMIT): {
            return { ...state, right: !state.right }
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
export const checkAnswerAllChoosen = () => {
    return { type: CHECK_ANSWER_ALL_CHOOSEN }
}
export const activateButtonSubmit = () => {
    return { type: ACTIVATE_BUTTON_SUBMIT }
}
export const deactivateButtonSubmit = () => {
    return { type: DEACTIVATE_BUTTON_SUBMIT }
}
export const wrongButtonSubmit = () => {
    return { type: WRONG_BUTTON_SUBMIT }
}
export const congrat = () => {
    return { type: RIGHT_BUTTON_SUBMIT }
}

export default buttonsReducer;