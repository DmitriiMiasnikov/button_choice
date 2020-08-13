import { connect } from 'react-redux';
import HintQuantity from './HintQuantity';
import { showHintQuantity } from './../../store/hintsReducer'


const mapStateToProps = (state) => {
    return {
        selected: state.buttons.selected,
        hintQuantityVisible: state.hints.hintQuantityVisible
    }
}

export default connect(mapStateToProps, {
    showHintQuantity
})(HintQuantity);