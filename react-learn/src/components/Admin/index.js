import React, {PureComponent} from 'react';
import Layout from "../common/Layout";
import {Route,Switch} from "react-router-dom";
import Header from "../Header";
import Aside from "../Aside";
import StudentList from "../student/StudentList";
import AddStudent from "../student/AddStudent";
import Courses from "../course/Courses";
import AddCourse from "../course/AddCourse";
import Welcome from "../Welcome";
import StudentDetail from "../student/StudentDetail";

class Admin extends PureComponent {
    render() {
        return (
            <Layout header={<Header/>} aside={<Aside/>}>
                <Switch>
                    <Route path='/student' exact component={StudentList}/>
                    <Route path='/student/add' exact component={AddStudent}/>
                    <Route path='/student/:sno' exact component={StudentDetail}/>
                    <Route path='/course' exact component={Courses}/>
                    <Route path='/course/add' exact component={AddCourse}/>
                    <Route path='/' exact component={Welcome}/>
                </Switch>
            </Layout>
        );
    }
}

export default Admin;