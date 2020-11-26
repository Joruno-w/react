import {PureComponent} from 'react';

class ErrorBound extends PureComponent {
    state = {
        hasErr: false,
    }

    static getDerivedStateFromError(err){
        console.log('发生了错误！')
        console.log(err);
        return{
            hasErr: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info.componentStack);
    }
    render() {
        if (this.state.hasErr){
            return null;
        }
        return this.props.children;
    }
}

export default ErrorBound;
