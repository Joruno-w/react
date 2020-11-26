import React from 'react';
import Menu from "../components/Menu";

function Index(props) {
    return (
        <div>
            <Menu />
            <div>{props.children}</div>
            <h1>页脚</h1>
        </div>
    );
}

export default Index;