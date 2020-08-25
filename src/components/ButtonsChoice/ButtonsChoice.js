import React from 'react';
import styles from './ButtonsChoice.module.scss';
import classnames from 'classnames';


const Buttons = (props) => {
    let buttons = <div></div>;
    if (props.selected) {
        buttons = props.buttons.map((el, i) => {
            return <div className={classnames({
                [styles.button]: true, 
                [styles.right]: props.right,
                [styles.wrong]: props.wrong,
                [styles.selected]: props.selected[i]
            })}
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