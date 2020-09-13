import React, {Component} from 'react';
import Pager from "./Pager";
import StudentList from "./StudentList";
import Modal from "./Modal";

class PageTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            limit: 10,
            panelNumber: 5,
            total: 0,
            studentList: [],
            show: false
        }
        this.fetchStudent();
    }

    async fetchStudent() {
        this.setState({
           show: true
        });
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=1_JavaScript_1564315783200&page=${this.state.current}&size=${this.state.limit}`)
            .then(res => res.json()).then(res => res.data);
        this.setState({
            show: false,
            total: resp.cont,
            studentList: resp.findByPage
        });

    }

    handlePageChange = target => {
        this.setState({
            current: target
        });
        this.fetchStudent();
    }

    render() {
        return (
            <div>
                <StudentList stus={this.state.studentList}/>
                <Pager {...this.state} onPageChange={this.handlePageChange}/>
                <Modal show={this.state.show}/>
            </div>
        );
    }
}

export default PageTest;
