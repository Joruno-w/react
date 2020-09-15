import React from 'react';

function WithLogin(Comp,str) {
    return class WithLoginWrapper extends React.Component{
        render() {
            if (this.props.isLogin){
                return(
                    <>
                        {str}
                        <Comp {...this.props}/>
                    </>
                )
            }
            return null;
        }
    }
}

export default WithLogin;
