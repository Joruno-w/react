import React from 'react';

function WithLog(Comp) {
    return class WithLogWrapper extends React.Component{
        componentDidMount() {
            console.log(`组件${Comp.name} 被创建了`);
        }

        componentWillUnmount() {
            console.log(`组件${Comp.name} 被销毁了`);
        }
        render() {
            return(
                <Comp {...this.props}/>
            )
        }
    }
}

export default WithLog;
