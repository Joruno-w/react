import React, {Component} from 'react';

class FormTest extends Component {
    state = {
        loginId: '',
        loginPwd: '',
        sex: 'male',
        chooseLoves: [],
        loves:[
            {value: 'football',text: '足球'},
            {value: 'basketball',text: '篮球'},
            {value: 'volleyball',text: '排球'},
            {value: 'tennis',text: '网球'},
            {value: 'badminton',text: '羽毛球'}
        ],
        city: 'beijing'
    }

    handleChange = e=>{
        let val = e.target.value;
        let name = e.target.name;
        if (e.target.type === 'checkbox'){
            if (e.target.checked){
                val = [...this.state.chooseLoves,val];
            }else{
                val = this.state.chooseLoves.filter(it=>it!==val);
            }
        }
        this.setState({
            [name]: val
        })
    }

    getCheckbox = ()=>{
        const bs = this.state.loves.map(it=> <label key={it.value}>
            <input
                type="checkbox"
                value={it.value}
                name="chooseLoves"
                checked={this.state.chooseLoves.includes(it.value)}
                onChange={this.handleChange}
            />{it.text}
        </label>);
        return bs;
    }
    render() {
        const bs = this.getCheckbox();
        return (
            <div>
                <p>
                    <input type="text" value={this.state.loginId} onChange={this.handleChange} name="loginId"/>
                </p>
                <p>
                    <input type="password" value={this.state.loginPwd} onChange={this.handleChange} name="loginPwd"/>
                </p>
                <p>
                    <label>
                        <input type="radio" value="male" name="sex" checked={this.state.sex === 'male'} onChange={this.handleChange}/>
                        男
                    </label>
                    <label>
                        <input type="radio" value="female" name="sex" checked={this.state.sex === 'female'} onChange={this.handleChange}/>
                        女
                    </label>
                </p>
                <p>
                    {bs}
                </p>
                <p>
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                    </select>
                </p>
                <button onClick={()=>{
                    console.log(this.state);
                }}>点击获取状态</button>
            </div>
        );
    }
}

export default FormTest;
