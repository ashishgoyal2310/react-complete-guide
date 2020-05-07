import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop'

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.hideOrderSummary} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100)',
                opacity: props.show ? '1' : '0',
                display: props.show ? 'block' : 'none'
            }}>
            { props.children }
        </div>
    </React.Fragment>
)

export default Modal;