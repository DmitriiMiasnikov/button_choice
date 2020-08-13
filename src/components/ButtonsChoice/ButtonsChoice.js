import React from 'react';
import styles from './ButtonsChoice.module.scss';


const Buttons = (props) => {
    let buttons = <div></div>;
    if (props.selected) {
        buttons = props.buttons.map((el, i) => {
            return <div className={`${styles.button} ${props.selected[i] ? styles.selected : ''}`}
                onClick={() => props.toggleSelectedFunc(i)} key={i}>{el}</div>
        })
    }
    return (
        <div className={styles.buttonsWrapper}>
            {buttons}
        </div>
    )
}
export default Buttons;