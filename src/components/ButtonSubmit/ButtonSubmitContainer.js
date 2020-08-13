import React from 'react';
import { connect } from 'react-redux';
import ButtonSubmit from './ButtonSubmit';
import {  } from '../../store/buttonsReducer';

class ButtonSubmitContainerInner extends React.Component {
    componentDidMount() {
        // this.props.setUnselected()
    }

    render() {
        return (
            <ButtonSubmit {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.buttons.selected
    }
}

export default connect(mapStateToProps, {

})(ButtonSubmitContainerInner);