import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
Modal.propTypes = {
    children: PropTypes.node
}

function Modal(props) {
    return (
        <div className={styles.modal}>
            <div className={styles["modal-center"]}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
