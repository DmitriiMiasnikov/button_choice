import React from 'react';
import styles from './ButtonSubmit.module.scss';


const ButtonSubmit = (props) => {
    return (
        <div className = {`${styles.buttonSubmit} 
            ${props.buttonSubmitDisabled ? styles.disabled : ''}
            ${props.buttonSubmitWrong ? styles.wrong : ''}
            ${props.buttonSubmitRight ? styles.right : ''}`}
            onClick = { () => props.checkAnswerFunc() }>Done</div>
    )
}
export default ButtonSubmit;