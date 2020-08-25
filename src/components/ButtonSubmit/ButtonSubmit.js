import React from 'react';
import styles from './ButtonSubmit.module.scss';
import classnames from 'classnames';


const ButtonSubmit = (props) => {
    return (
        <div className = {classnames({
            [styles.buttonSubmit]: true,
            [styles.disabled]: props.buttonSubmitDisabled,
            [styles.right]: props.right,
            [styles.wrong]: props.wrong
        })}
            onClick = { () => props.checkAnswerFunc() }>Done</div>
    )
}
export default ButtonSubmit;