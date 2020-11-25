import {all} from 'redux-saga/effects';
import counter from "./counter";
import student from './student';
export default function*(){
    yield all([counter(),student()])
}

