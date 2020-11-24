import React from 'react';
import {connect} from "react-redux";
import {push} from 'connected-react-router';

function AddStudent({onClick}) {
    return (
        <div>
            <h1>添加学生</h1>
            <button onClick={() => {
                onClick && onClick();
            }}>跳转
            </button>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    onClick: () =>dispatch(push('/course'))
});


export default connect(null, mapDispatchToProps)(AddStudent);