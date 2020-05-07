import React from 'react';
import classes from './Navigation.module.css'

const NavigationItems = (props) => {
    return (
        <ul>
            <li className={props.active ? classes.active : null}><a href="/">Create Burger</a></li>
            <li><a href="/">Checkout</a></li>
        </ul>
    );
}

export default NavigationItems;