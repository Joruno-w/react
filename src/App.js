import React, {Component} from 'react';
import Comp,{A} from "./components/Comp";
class App extends Component {
    render() {
        return (
            <Comp
                a="asrgawrgae"
                b={[1,2,3]}
                c={true}
                d={()=>console.log('a')}
                e={123}
                f={{
                    a:1,
                    b:2
                }}
                g={Symbol("wsl")}
                h={<h1>你好啊</h1>}
                i={<h1>你好啊</h1>}
                j={A}
                k={new A()}
                l='男'
                m={'wsl'||123}
                n={[1,2,3]}
                o={{
                    a: 1,
                    b: 2
                }}
                p={{
                    name: 'wsl',
                    age: 20,
                    address:{
                        province: 'jiangxi',
                        city: 'nanchang',
                    }
                }}
                q={{
                    name: 'wsl',
                    age: 20,
                    address:{
                        province: 'jiangxi',
                        city: 'nanchang',
                    }
                }}
                r={99}
            />
        );
    }
}

export default App;
