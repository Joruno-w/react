import React, {useImperativeHandle, useRef} from 'react';

function Test(props,ref) {
    useImperativeHandle(ref,()=>{
        return{
            method(){
                console.log("method called");
            }
        }
    },[]);
    return <h1>Test component</h1>
}

const TestWrapper = React.forwardRef(Test);

function App() {
    const Ref = useRef();
    return (
        <div>
            <TestWrapper ref={Ref}/>
            <button onClick={()=>{
                Ref.current.method();
            }}>click</button>
        </div>
    );
}

export default App;