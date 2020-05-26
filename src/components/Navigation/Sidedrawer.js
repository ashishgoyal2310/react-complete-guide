import React from 'react';
import { LogoImage } from './Logo'
import Backdrop from '../UI/Backdrop'
import NavigationItems from './NavigationItems'
import classes from './Navigation.module.css'

const Sidedrawer = (props) => {
    const baseUrlSidedrawer = (props.baseUrl && props.baseUrl !== '/') ? props.baseUrl : '';

    let sidedrawerCls = [classes.Sidedrawer]
    if (props.show) {
        sidedrawerCls.push(classes.Open);
    } else {
        sidedrawerCls.push(classes.Close);
    }

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.toggleSidedrawer} />
            <div className={sidedrawerCls.join(' ')}>
                <div className={classes.SidedrawerLogo}><LogoImage /></div>
                <nav>
                    <NavigationItems baseUrl={baseUrlSidedrawer} active />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Sidedrawer;