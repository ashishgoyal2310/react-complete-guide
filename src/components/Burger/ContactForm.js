import React from 'react';
import Button from '../UI/Button'
import FormInput from '../UI/FormInput'
import classes from './Burger.module.css'

const ContactForm = (props) => {
    return (
        <div>
            <form className={ classes.ContactFrom }>
                <FormInput />
                <FormInput />
                <FormInput />
                <FormInput />
                <Button btnType="Success" clicked={props.makeOrder}>Make Order</Button>
            </form>
        </div>
    );
}

export default ContactForm;