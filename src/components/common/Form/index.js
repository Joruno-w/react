import React, {Component} from 'react';
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import {Provider} from "./context";

class Form extends Component {
    state = {
        formData:{},
        changeFormData: (name,val)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]: val
                }
            });
        },
        submit: ()=>{
          this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }
    }

    render() {
        return (
            <div>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </div>
        );
    }
}
Form.Input = FormInput;
Form.Button = FormButton;
export default Form;
