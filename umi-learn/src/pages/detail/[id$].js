import React from 'react';

function id(props) {
    return (
        <h1>{props.match.params.id}</h1>
    );
}

export default id;