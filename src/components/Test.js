import React, {PureComponent} from 'react';
import MouseListener from "./MouseListener";
const showPoint = mouse=><>x:{parseInt(mouse.x)},y:{parseInt(mouse.y)}</>
const movePanel = mouse=><div style={{
    position:"absolute",
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    left: mouse.x - 50,
    top: mouse.y - 50,
}}/>
class Test extends PureComponent {
    render() {
        return (
            <>
                <MouseListener render={movePanel}/>
                <MouseListener render={showPoint}/>
            </>
        );
    }
}


export default Test;
