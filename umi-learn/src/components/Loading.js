import React from 'react';
import Modal from "./Modal";
import {connect} from 'dva';
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
const mapStateToProps = state=>({
   show: state.loading.effects["students/fetchStudents"]
});

export default connect(mapStateToProps)(Loading);