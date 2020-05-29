import React from 'react';

const UserInput = props => {
    const inputStyle = {
        border: '1px solid blue',
        boxShadow: '0px 0px 3px 1px blue',
    }

    return (
        <React.Fragment>
            <input type="text" style={inputStyle} onChange={props.onChange} value={props.username} />
        </React.Fragment>
    );
}

export default UserInput;