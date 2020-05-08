import React from 'react';
import classes from './Navigation.module.css'

const NavigationItem = (props) => (
    <li className={props.active ? classes.active : null}><a href="{props.link}">{props.txt}</a></li>
);

const NavigationItems = (props) => {
    return (
        <ul>
            <NavigationItem link='/' txt='Build Burger' active />
            <NavigationItem link='/' txt='Checkout' />
        </ul>
    );
}

export default NavigationItems;