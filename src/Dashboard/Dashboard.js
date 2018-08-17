import React from 'react';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div>视图界面</div>;
    }
}
