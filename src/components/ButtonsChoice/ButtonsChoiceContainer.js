import React from 'react';
import { connect } from 'react-redux';
import ButtonsChoice from './ButtonsChoice';
import { setUnselected, toggleSelected, activateButtonSubmit, 
    toggleWrongButtonSubmit, deactivateButtonSubmit } from '../../store/buttonsReducer'

class ButtonsContainerInner extends React.Component {
    componentDidMount() {
        this.props.setUnselected()
      }
    componentDidUpdate() {
        if (this.props.selected.some(el => el === true)) {
            this.props.activateButtonSubmit()
        } else this.props.deactivateButtonSubmit()
    }
    toggleSelectedFunc = (i) => {
        this.props.toggleSelected(i)
    } 
    render() {
        return (
            <ButtonsChoice {...this.props} toggleSelectedFunc = {this.toggleSelectedFunc}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buttons: state.buttons.buttons,
        selected: state.buttons.selected,
        buttonSubmitDisabled: state.buttons.buttonSubmitDisabled,
        buttonSubmitWrong: state.buttons.buttonSubmitWrong
    }
}

export default connect(mapStateToProps, {
    setUnselected,
    toggleSelected,
    activateButtonSubmit,
    deactivateButtonSubmit,
    toggleWrongButtonSubmit
})(ButtonsContainerInner);