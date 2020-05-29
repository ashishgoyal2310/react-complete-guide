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
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: "email",
                    placeholder: "Email"
                },
                value: ''
            },
            instruction: {
                elementType: 'textarea',
                elementConfig: {
                    type: "text",
                    placeholder: "Any Instruction"
                },
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
                value: ''
            }
        }
    }

    changeInputHandler = (event, elementName) => {
        const updatedFormElements = {...this.state.formElements};
        const updatedElement = {...updatedFormElements[elementName]};

        updatedElement.value = event.target.value;
        updatedFormElements[elementName] = updatedElement;
        this.setState({ formElements: updatedFormElements });
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
                    value={eleData.value}
                    changed={(event) => this.changeInputHandler(event, key)} />
            );
        }

        return (
            <div>
                <form className={ classes.ContactFrom }>
                    { formElementLst }
                    <Button btnType="Success" clicked={this.props.makeOrder}>Make Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactForm;