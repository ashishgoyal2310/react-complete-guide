import React from 'react';

import classes from './FormInput.module.css'

const FormInput = (props) => {
    let inputElement = null;
    const valueConfig = {value: props.value, onChange: props.changed};

    switch ( props.elementType ) {
        case ('textarea'):
            inputElement = <textarea
                                className={ classes.FormInput }
                                {...props.config}
                                {...valueConfig}>
                            </textarea>
            break;
        case ('select'):
            inputElement = <select
                                className={ classes.FormInput }
                                {...valueConfig}>
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
                            {...valueConfig} />;
            break;
    }

    return inputElement;
}

export default FormInput;