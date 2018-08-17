import React, { Component } from 'react';

import './Admin.less';
import Header from './_platform/layout/Header/Header';
import Footer from './_platform/layout/Footer/Footer';

class Admin extends Component {
    render() {
        return (
            <div className="Admin">
                <Header />
                {/* <Content /> */}
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Admin;
