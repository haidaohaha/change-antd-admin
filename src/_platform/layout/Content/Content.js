import React from 'react';
import './Content.less';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div className='content'>这里是内容</div>;
    }
}
