import React, { Component } from 'react';
import Button from '../UI/Button'
import FormInput from '../UI/FormInput'
import classes from './Burger.module.css'

class ContactForm extends Component {
    state = {
        formElements: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Name"
                },
                validations: {
                    required: true,
                },
                isValid: true,
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: "email",
                    placeholder: "Email"
                },
                validations: {
                    required: true,
                },
                isValid: true,
                value: ''
            },
            instruction: {
                elementType: 'textarea',
                elementConfig: {
                    type: "text",
                    placeholder: "Any Instruction"
                },
                validations: {
                    required: false,
                    maxLength: 150
                },
                isValid: true,
                value: ''
            },
            deliveryType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: "normal", displayValue: "Normal"},
                        {value: "fastest", displayValue: "Fastest"},
                        {value: "cheapest", displayValue: "Cheapest"},
                    ]
                },
                validations: {
                    required: true,
                },
                isValid: true,
                value: ''
            }
        }
    }

    checkIsValid(value, rules) {
        if (!rules) return true;

        let isValid = true;

        if (rules.required && !value) isValid = false
        else if (rules.maxLength && value.length > rules.maxLength) isValid = false

        return isValid;
    }

    updateElementData = (elementName, value) => {
        const updatedFormElements = {...this.state.formElements};
        const updatedElement = {...updatedFormElements[elementName]};

        updatedElement.value = value;
        updatedElement.isValid = this.checkIsValid(value, updatedElement.validations);

        updatedFormElements[elementName] = updatedElement;
        this.setState({ formElements: updatedFormElements });
    }

    changeInputHandler = (event, elementName) => {
        const value = event.target.value;
        this.updateElementData(elementName, value)
    }

    contactFormSubmitHandler = (event) => {
        event.preventDefault();
        const updatedFormElements = {...this.state.formElements};

        const formData = {};
        let isFormValid = true;
        for (let elementName in this.state.formElements) {
            const updatedElement = {...updatedFormElements[elementName]};
            const eleIsValid = this.checkIsValid(updatedElement.value, updatedElement.validations);

            if (!eleIsValid) {
                isFormValid = false;

                updatedElement.isValid = eleIsValid;
                updatedFormElements[elementName] = updatedElement;
            } else {
                formData[elementName] = updatedElement.value;
            }
        }

        console.log('[ContactForm.js] contactFormSubmitHandler', isFormValid, formData);
        if (isFormValid) {
            this.props.makeOrder(formData);
        } else {
            this.setState({ formElements: updatedFormElements });
        }
    }

    render() {
        const formElementLst = []
        for (let key in this.state.formElements) {
            const eleData = this.state.formElements[key]
            formElementLst.push(
                <FormInput
                    key={key}
                    elementType={eleData.elementType}
                    config={eleData.elementConfig}
                    valid={eleData.isValid}
                    value={eleData.value}
                    changed={(event) => this.changeInputHandler(event, key)} />
            );
        }

        return (
            <div>
                <form className={ classes.ContactFrom } onSubmit={ this.contactFormSubmitHandler }>
                    { formElementLst }
                    {/* <Button btnType="Success" clicked={this.props.makeOrder}>Make Order</Button> */}
                    <Button btnType="Success" >Make Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactForm;