import React from 'react';
import './Header.less';
import logo from '../images/logo.svg';
import { qh_menus } from '../../../config/menuConfig';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <header className="Header">
                <a className="header-logo">
                    <img src={logo} className="logo" alt="logo" />
                    <h1 className="header-title">Company Admin</h1>
                </a>
                <Menu className="nav-menu head-nav" mode="horizontal">
                    {qh_menus.map(menu => {
                        return (
                            <Menu.Item key={menu.key} className="nav-item">
                                <Link to={menu.path}>
                                    {menu.icon}
                                    <span className="title">{menu.title}</span>
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </header>
        );
    }
}
