import React from 'react';

import classes from './FormInput.module.css'

const FormInput = (props) => {
    let inputElement = null;
    let inputClasses = [classes.FormInput]
    if (!props.valid) inputClasses.push(classes.HasError)

    const valueConfig = {value: props.value, onChange: props.changed};

    switch ( props.elementType ) {
        case ('textarea'):
            inputElement = <textarea
                                className={ inputClasses.join(' ') }
                                {...props.config}
                                {...valueConfig}>
                            </textarea>
            break;
        case ('select'):
            inputElement = <select
                                className={ inputClasses.join(' ') }
                                {...valueConfig}>
                                    <option value="">---</option>
                                    {props.config.options.map(option => (
                                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                                    ))}
                            </select>
            break;
        default:
            inputElement = <input
                            className={ inputClasses.join(' ') }
                            {...props.config}
                            {...valueConfig} />;
            break;
    }

    return inputElement;
}

export default FormInput;