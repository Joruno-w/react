import StudentSearchBar from "./StudentSearchBar";
import React from "react";
import {change as changeCondition} from "../redux-student/action/student/searchAction";
import StudentTable from "./StudentTable";
import {fetchStudentsAndTotal} from "../redux-student/action/student/resultAction";
import Pager from "./common/Pager";
import store from "../redux-student";
import Loading from "./Loading";
import {connect,connectAdvanced} from "react-redux";

let mapStateToProps = state => ({
    defaultValue: {
        key: state.search.key,
        sex: state.search.sex
    }
});

let mapDispatchToProps = dispatch => ({
    onSearch: newCondition => {
        newCondition.page = 1;
        dispatch(changeCondition(newCondition));
        dispatch(fetchStudentsAndTotal());
    }
});

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);

mapStateToProps = state => ({
    stus: state.result.data,
})

const Table = connect(mapStateToProps)(StudentTable);

mapStateToProps = state => ({
    current: state.search.page,
    total: state.result.total,
    limit: state.search.limit,
    panelNumber: 5
});

mapDispatchToProps = dispatch => ({
    onPageChange: newPage => {
        dispatch(changeCondition({
            page: newPage,
        }));
        dispatch(fetchStudentsAndTotal());
    }
});

function selectorFactory(dispatch) {
    return function (state,ownProps){
        return{
            current: state.search.page,
            total: state.result.total,
            limit: state.search.limit,
            panelNumber: 5,
            onPageChange: newPage => {
                dispatch(changeCondition({
                    page: newPage,
                }));
                dispatch(fetchStudentsAndTotal());
            }
        }
    }
}
const PagerTemp = connectAdvanced(selectorFactory)(Pager);

mapStateToProps = state =>({
   show: state.result.isLoading
});

const LoadingTemp = connect(mapStateToProps)(Loading);

export default class StudentSearch extends React.Component {
    componentDidMount() {
        store.dispatch(fetchStudentsAndTotal());
    }
    render() {
        return (
            <>
                <SearchBar/>
                <Table/>
                <PagerTemp/>
                <LoadingTemp/>
            </>
        )
    }

}

