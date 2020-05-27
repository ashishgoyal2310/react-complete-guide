import React from 'react';
import Button from '../UI/Button'
import classes from './Burger.module.css'

const ContactForm = (props) => {
    return (
        <div>
            <form className={ classes.ContactFrom }>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Zip" />
                <Button btnType="Success" clicked={props.makeOrder}>Make Order</Button>
            </form>
        </div>
    );
}

export default ContactForm;