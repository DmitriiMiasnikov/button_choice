import React from 'react';
import { connect } from 'react-redux';
import ButtonSubmit from './ButtonSubmit';
import { checkAnswer, toggleWrongButtonSubmit } from '../../store/buttonsReducer';
import { showHintWrong, showHintQuantity, hideHints } from './../../store/hintsReducer';

class ButtonSubmitContainerInner extends React.Component {
    componentDidUpdate = () => {
    }
    checkAnswerFunc = () => {
        this.props.checkAnswer()
        console.log(this.props.answerIsRight)
        if (!this.props.answerIsRight) {
            this.props.showHintWrong()
            this.props.toggleWrongButtonSubmit()
        } else {
            this.props.hideHints()
        }
    }
    render() {
        return (
            <ButtonSubmit {...this.props} checkAnswerFunc={this.checkAnswerFunc} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.buttons.selected,
        buttonSubmitDisabled: state.buttons.buttonSubmitDisabled,
        buttonSubmitWrong: state.buttons.buttonSubmitWrong,
        answerIsRight: state.buttons.answerIsRight
    }
}

export default connect(mapStateToProps, {
    checkAnswer,
    showHintQuantity,
    showHintWrong,
    hideHints,
    toggleWrongButtonSubmit
})(ButtonSubmitContainerInner);