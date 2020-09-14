import React from 'react';
import './index.css';
function Layout(props) {
    const defaultProps = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800,
        gap: 0
    }
    const datas = Object.assign({},defaultProps,props);
    return (
        <div className="layout">
            <div className="main" style={{
                minWidth: datas.minWidth
            }}>{props.children}</div>
            <div className="left" style={{
                width: datas.leftWidth,
                marginLeft: datas.gap
            }}>{props.left}</div>
            <div className="right" style={{
                width: datas.rightWidth,
                marginRight: datas.gap
            }}>{props.right}</div>
        </div>
    );
}

export default Layout;
