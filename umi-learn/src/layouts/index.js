import React from 'react';
import Menu from "../components/Menu/Menu";

function Index(props) {
    return (
        <div>
            <Menu />
            <div>{props.children}</div>
        </div>
    );
}

export default Index;