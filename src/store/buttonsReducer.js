const TOGGLE_SELECTED = 'TOGGLE-SELECTED',
SET_UNSELECTED = 'SET-UNSELECTED';

const stateDefault = {
    buttons: [
        '5 + x = 11',
        '16 - x = 12',
        'x + 5 = 11',
        'x - 16 = 12'
    ],
    selected: null
}
const buttonsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case (SET_UNSELECTED): {
            return {...state, selected: state.buttons.map((el, i) => false)}
        }
        case (TOGGLE_SELECTED): {
            return {...state, selected: state.buttons.map((el, i) => i === action.id)}
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

export default buttonsReducer;