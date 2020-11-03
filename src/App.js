import React from 'react';
import {TransitionGroup} from 'react-transition-group';
import './App.css';
import {v4 as uuid} from 'uuid';
import FadeTransition from "./components/common/FadeTransition";

const duration = 1000;

class App extends React.Component {
    state = {
        show: true,
        tasks: [
            {id: uuid(), name: '任务1'},
            {id: uuid(), name: '任务2'},
            {id: uuid(), name: '任务3'},
        ]
    };

    render() {
        return (
            <TransitionGroup>
                {this.state.tasks.map(it=>(
                    <FadeTransition key={it.id} timeout={duration}>
                        <li>
                            {it.name}
                            <button onClick={()=>{
                                this.setState({
                                    tasks: this.state.tasks.filter(t=>t.id!==it.id)
                                });
                            }}>删除</button>
                        </li>
                    </FadeTransition>
                ))}
                <button onClick={()=>{
                    const name = window.prompt("请输入任务名称") || '默认任务名称';
                    this.setState({
                        tasks: [...this.state.tasks,{id: uuid(),name}]
                    });
                }}>添加</button>
            </TransitionGroup>
        );
    }
}

export default App;