import React from 'react';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div>登陆页面</div>;
    }
}
