import React from 'react';
import { LogoImage } from './Logo'
import NavigationItems from './NavigationItems'
import classes from './Navigation.module.css'

const Toolbar = (props) => {
    const baseUrlToolbar = (props.baseUrl && props.baseUrl !== '/') ? props.baseUrl : '';

    return (
        <div className={classes.Toolbar}>
            <div className={classes.Menu} onClick={props.toggleSidedrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.ToolbarLogo}><LogoImage /></div>
            <nav>
                <NavigationItems baseUrl={baseUrlToolbar} active />
            </nav>
        </div>
    );
}

export default Toolbar;