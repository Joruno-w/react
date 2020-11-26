import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ctx from "./context";
class FormInput extends Component {
    static contextType = ctx;
    static defaultProps = {
        type: 'text'
    }
    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string
    }
    render() {
        return (
            <input
                type={this.props.type}
                value={this.context.formData[this.props.name]||''}
                onChange={e=>{
                    this.context.changeFormData(this.props.name,e.target.value);
                }}
            />
        );
    }
}

export default FormInput;
