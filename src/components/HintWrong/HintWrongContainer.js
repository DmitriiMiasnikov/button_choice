import { connect } from 'react-redux';
import HintWrong from './HintWrong';
import { showHintWrong } from './../../store/hintsReducer'


const mapStateToProps = (state) => {
    return {
        selected: state.buttons.selected,
        hintWrongVisible: state.hints.hintWrongVisible
    }
}

export default connect(mapStateToProps, {
    showHintWrong
})(HintWrong);