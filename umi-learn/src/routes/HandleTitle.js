import React from 'react';

function HandleTitle(props) {
    let title = "无标题"
    if (props.route && props.route.title){
        title = props.route.title;
    }
    document.title = title;
    return props.children;
}

export default HandleTitle;