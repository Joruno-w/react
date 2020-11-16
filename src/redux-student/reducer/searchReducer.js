import * as seachActions from '../action/searchAction';
const initialState = {
    key: '',
    sex: -1,
    page: 1,
    limit: 10
};

export default function searchReducer(state=initialState,{type,payload}) {
    switch (type) {
        case seachActions.CHANGE_CONDITION:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}