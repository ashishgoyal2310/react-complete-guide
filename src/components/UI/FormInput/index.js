import React from 'react';

import classes from './FormInput.module.css'

const FormInput = (props) => {
    let inputElement = null;
    switch ( props.elementType ) {
        case ('textarea'):
            inputElement = <textarea
                                className={ classes.FormInput }
                                {...props.config}
                                value={ props.value }>
                            </textarea>
            break;
        case ('select'):
            inputElement = <select
                                className={ classes.FormInput }
                                value={ props.value }>
                                <option value="">---</option>
                                {props.config.options.map(option => (
                                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                                ))}
                            </select>
            break;
        default:
            inputElement = <input
                            className={ classes.FormInput }
                            {...props.config}
                            value={ props.value } />;
            break;
    }

    return inputElement;
}

export default FormInput;