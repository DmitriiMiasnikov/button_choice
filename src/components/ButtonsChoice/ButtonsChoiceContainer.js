import React from 'react';
import { connect } from 'react-redux';
import ButtonsChoice from './ButtonsChoice';
import { setUnselected, toggleSelected } from '../../store/buttonsReducer'

class ButtonsContainerInner extends React.Component {
    componentDidMount() {
        this.props.setUnselected()
    }

    render() {
        return (
            <ButtonsChoice {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buttons: state.buttons.buttons,
        selected: state.buttons.selected
    }
}

export default connect(mapStateToProps, {
    setUnselected,
    toggleSelected
})(ButtonsContainerInner);