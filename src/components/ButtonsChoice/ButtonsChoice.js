import React from 'react';
import styles from './ButtonsChoice.module.scss';


const Buttons = (props) => {
    let buttons = <div></div>;
    if (props.selected) {
        buttons = props.buttons.map((el, i) => {
            const selected = props.selected[i] ? styles.selected : '';
            const right = props.right ? styles.right : '';
            const wrong = props.wrong ? styles.wrong : '';
            const classes = `${styles.button} ${selected} ${right} ${wrong}`
            return <div className={classes}
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