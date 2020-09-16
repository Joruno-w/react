import React, {PureComponent} from 'react';

class AddTask extends PureComponent {
    state = {
        value:''
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={e=>{
                    this.setState({
                        value: e.target.value
                    });
                }}/>
                <button onClick={()=>{
                    this.props.onAddTask && this.props.onAddTask(this.state.value);
                    this.setState({
                        value: ''
                    });
                }}>添加</button>
            </div>
        );
    }
}

export default AddTask;
