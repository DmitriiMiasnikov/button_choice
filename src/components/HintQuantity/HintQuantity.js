import React from 'react';
import styles from './HintQuantity.module.scss'

const HintQuantity = (props) => {
    return (
        <div className = {`${styles.hintQuantity} ${props.hintQuantityVisible ? '' : styles.hide}`}>
            Выбраны не все верные варианты</div>
    )
}



export default HintQuantity;