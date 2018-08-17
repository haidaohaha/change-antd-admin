import React from 'react';
import './Footer.less';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div className='footer'>这里是底部</div>;
    }
}
