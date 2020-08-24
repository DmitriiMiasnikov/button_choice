import React from 'react';
import { connect } from 'react-redux';
import ButtonSubmit from './ButtonSubmit';
import { checkAnswer, wrongButtonSubmit, checkAnswerAllChoosen, congrat, setUnselected } from '../../store/buttonsReducer';
import { showHintWrong, showHintQuantity, hideHintWrong, hideHintQuantity } from './../../store/hintsReducer';

class ButtonSubmitContainerInner extends React.Component {
    componentDidUpdate = () => {
    }
    checkAnswerFunc = async () => {
        await this.props.checkAnswer();
        await this.props.checkAnswerAllChoosen()
        if (!this.props.answerIsRight) {
            this.props.showHintWrong()
            this.props.wrongButtonSubmit()
            if (this.props.allRightVariantsChoosen) {
                this.props.showHintQuantity()
            }
            if (!this.props.allRightVariantsChoosen) {
                this.props.hideHintQuantity()
            }
            await new Promise(() => setTimeout(() => {
                this.props.wrongButtonSubmit()
            }, 500))
        } else {
            this.props.hideHintWrong()
            this.props.hideHintQuantity()
            this.props.congrat()
            await new Promise(() => setTimeout(() => {
                this.props.congrat()
                this.props.setUnselected()
            }, 500))
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
        answer: state.buttons.answer,
        selected: state.buttons.selected,
        buttonSubmitDisabled: state.buttons.buttonSubmitDisabled,
        wrong: state.buttons.wrong,
        right: state.buttons.right,
        answerIsRight: state.buttons.answerIsRight,
        allRightVariantsChoosen: state.buttons.allRightVariantsChoosen
    }
}

export default connect(mapStateToProps, {
    checkAnswer,
    checkAnswerAllChoosen,
    showHintQuantity,
    showHintWrong,
    hideHintWrong,
    hideHintQuantity,
    wrongButtonSubmit,
    congrat,
    setUnselected
})(ButtonSubmitContainerInner);