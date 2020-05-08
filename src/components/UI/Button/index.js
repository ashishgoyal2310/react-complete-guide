import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    let btnCls = [classes.Button];
    if (props.btnType === 'Success') {
        btnCls.push(classes.Success)
    } else if (props.btnType === 'Danger') {
        btnCls.push(classes.Danger)
    }
    return (
        <button onClick={props.clicked} className={btnCls.join(' ')}>{props.children}</button>
    );
}

export default Button;