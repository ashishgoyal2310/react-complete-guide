import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

const NavigationItem = (props) => (
    <li>
        {/* <a href={props.link} className={props.active ? 'active' : null}>{props.txt}</a> */}
        <NavLink to={ props.link } exact={ props.exact }>{ props.txt }</NavLink>
    </li>
);

const NavigationItems = (props) => {
    const baseUrlNavigation = (props.baseUrl && props.baseUrl !== '/') ? props.baseUrl : '';
    return (
        <ul>
            <NavigationItem link={baseUrlNavigation + '/'} txt='Build Burger' exact />
            <NavigationItem link={baseUrlNavigation + '/orders'} txt='Orders' />
        </ul>
    );
}

export default NavigationItems;