import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'olive',
        color: '#fff',
    }

    return (
        <p style={style} onClick={props.onClick}>{props.character}</p>
    );
}

export default Char;