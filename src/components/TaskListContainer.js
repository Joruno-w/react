import React, {PureComponent} from 'react';
import TaskList from "./TaskList";
import AddTask from "./AddTask";
class TaskListContainer extends PureComponent{
    state = {
        tasks: []
    }

    componentDidMount() {
        const ts = [];
        for (let i = 1;i <= 10;i ++){
            ts.push({
                name: `任务${i}`,
                isFinish: Math.random() < .5
            });
        }
        this.setState({
            tasks: ts
        });
    }

    handleAddTask = newTask=>{
        this.setState({
            tasks: [...this.state.tasks,{name: newTask, isFinish: false}]
        });
    }

    render() {
        return (
            <div>
                <AddTask onAddTask={this.handleAddTask}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}


export default TaskListContainer;
