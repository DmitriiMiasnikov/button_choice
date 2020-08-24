import React from 'react';
import styles from './ButtonSubmit.module.scss';


const ButtonSubmit = (props) => {
    const disabled = props.buttonSubmitDisabled ? styles.disabled : '';
    const right = props.right ? styles.right : '';
    const wrong = props.wrong ? styles.wrong : '';
    const classes = `${styles.buttonSubmit} ${disabled} ${right} ${wrong}`
    return (
        <div className = {classes}
            onClick = { () => props.checkAnswerFunc() }>Done</div>
    )
}
export default ButtonSubmit;