import {handleActions} from 'redux-actions';
import {increase,decrease,add} from '../../action/counter';
export default handleActions({
    [increase]: state => state + 1,
    [decrease]: state => state - 1,
    [add]: (state, {payload}) => state + payload
},10);