import React from 'react';
import {connect} from 'dva';
import styles from './index.css';
import buttonStyles from '../../assets/button.less';

function Counter({number, onIncrease, onDecrease}) {
    return (
        <div className={styles.counter}>
            <h1>{number}</h1>
            <div>
                <button className={buttonStyles.button} onClick={onIncrease}>+</button>
                <button className={buttonStyles.button} onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    number: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrease() {
        dispatch({type: 'counter/increase'});
    },
    onDecrease() {
        dispatch({type: 'counter/decrease'});
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);