import React, {Component} from 'react';
import {getAllStudent} from "./services/getAllStudent";
import SelectGroup from "./components/common/SelectGroup";
class App extends Component {
    state = {
        data: [],
        value: '',
    }

    async componentDidMount() {
        const resp = await getAllStudent();
        this.setState({
            data: resp.map(it=>({value: it.id.toString(), text:it.name}))
        });
    }

    render() {
        return (
            <SelectGroup
                {...this.state}
                onChange={value=>{
                    this.setState({
                        value
                    });
                }}
            />
        );
    }
}

export default App;
