import React, {useState} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';
import 'animate.css';
import {v4 as uuid} from 'uuid';

const duration = 1000;

function App() {
    const [students, setStudents] = useState([
        {id: uuid(), name: '任务1'},
        {id: uuid(), name: '任务2'},
        {id: uuid(), name: '任务3'},
    ]);
    return (
        <TransitionGroup component="ul">
            {students.map(it => (
                <CSSTransition appear key={it.id} timeout={duration}>
                    <li>
                        {it.name}
                        <button onClick={() => {
                            setStudents(students.filter(t => t.id !== it.id));
                        }}>删除
                        </button>
                    </li>
                </CSSTransition>
            ))}
            <button onClick={() => {
                const name = window.prompt("请输入任务名称");
                setStudents([...students, {id: uuid(), name}]);
            }}>添加任务</button>
        </TransitionGroup>
    );
}

export default App;