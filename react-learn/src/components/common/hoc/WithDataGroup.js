import React from 'react';
import types from "../../../utils/commonTypes";

function WithDataGroup(Comp) {
    return class WithDataWrapper extends React.Component{
        static defaultProps = {
            data: []
        }
        static propTypes = {
            data: types.groupData
        }
        render() {
            const comps = this.props.data.map(it=><Comp key={it.value} info={it} {...this.props}/>);
            return(
                {comps}
            );
        }
    }
}

export default WithDataGroup;
