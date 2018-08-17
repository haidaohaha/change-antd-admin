import React from 'react';
export default class NoMatch extends React.Component {
constructor(props) {
super(props);
this.state = {
description: '极简React片段！',
}
}
render() {
return (
<div>404 Not Found !!!</div>
)
}
}