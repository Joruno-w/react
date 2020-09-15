import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import types from "../../../utils/commonTypes";
Layout.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800,
    gap: 0
}

Layout.propTypes = {
    children: types.children,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    minWidth: PropTypes.number,
    gap: PropTypes.number,
    left: PropTypes.node,
    right: PropTypes.node
}

function Layout(props) {
    return (
        <div className="layout">
            <div className="main" style={{
                minWidth: props.minWidth
            }}>{props.children}</div>
            <div className="left" style={{
                width: props.leftWidth,
                marginLeft: props.gap
            }}>{props.left}</div>
            <div className="right" style={{
                width: props.rightWidth,
                marginRight: props.gap
            }}>{props.right}</div>
        </div>
    );
}

export default Layout;
