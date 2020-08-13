import React from 'react';
import styles from './HintWrong.module.scss';

const HintWrong = (props) => {
    return (
        <div className={`${styles.hintWrong} ${props.hintWrongVisible ? '' : styles.hide }`}>Вычисли X</div>
    )
}

export default HintWrong;