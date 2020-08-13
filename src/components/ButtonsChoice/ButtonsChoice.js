import React from 'react';
import styles from './ButtonsChoice.module.scss';


const Buttons = (props) => {
    const buttons = props.buttons.map((el, i) => {
        return <div className={`${styles.button}`}
            onClick={() => props.toggleSelected()} key={i}>{el}</div>
    })
    return (
        <div className={styles.buttonsWrapper}>
            {buttons}
        </div>
    )
}
export default Buttons;