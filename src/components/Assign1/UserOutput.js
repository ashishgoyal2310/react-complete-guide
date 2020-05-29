import React from 'react';

const UserOutput = props => {
    return (
        <p class="UserOutput">
            Username: {props.username}
            <br />
            Some random text
        </p>
    );
}

export default UserOutput;