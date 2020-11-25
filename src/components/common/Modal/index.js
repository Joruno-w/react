import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import types from "../../../utils/commonTypes";
Modal.propTypes = {
    onClose: PropTypes.func,
    children: types.children
}
function Modal(props) {
    return (
        <div className="modal" onClick={e=>{
            if (e.target === e.currentTarget){
                props.onClose();
            }
        }}>
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
