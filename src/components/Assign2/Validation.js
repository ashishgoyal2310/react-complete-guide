import React from 'react';

const Validation = (props) => {
    return (
        <p>
            {props.inputLength <= 5 ? "Text too short" : "Text long enough"}
        </p>
    );
}

export default Validation;