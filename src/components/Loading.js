import React from 'react';
import Modal from "./common/Modal";

function Loading(props) {
    return (
        <>
            {props.show && <Modal>
                <div style={{
                    color: '#fff',
                    fontSize: "3em"
                }}>
                    加载中...
                </div>
            </Modal>}
        </>
    );
}

export default Loading;