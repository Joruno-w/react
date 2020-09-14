import React, {Component} from 'react';
import Modal from "./common/Modal";

class Test extends Component {
    state = {
        show: true
    }

    showModal = () => {
        this.setState({
            show: true
        });
    }
    hideModal = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div>
                {this.state.show ? (<Modal onClose={this.hideModal}>
                    <div style={{
                        background: '#fff'
                    }}>
                        <h1>这是显示的内容</h1>
                        <button onClick={this.hideModal}>隐藏朦层</button>
                    </div>
                </Modal>) : null}
                <button onClick={this.showModal}>显示朦层</button>
            </div>
        );
    }
}

export default Test;
