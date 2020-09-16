import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './index.css';
class Task extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool.isRequired
    }
    render() {
        return (
            <li className={this.props.isFinish? 'finish': ''}>
                {this.props.name}
            </li>
        );
    }
}
export default Task;
