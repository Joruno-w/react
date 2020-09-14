import React from 'react';
import './index.css';
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
