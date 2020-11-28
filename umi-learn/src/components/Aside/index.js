import React from 'react';
import {withRouter,NavLink} from 'umi';
import {Menu} from "antd";
import {UsergroupAddOutlined,MenuUnfoldOutlined,MenuFoldOutlined,DesktopOutlined } from '@ant-design/icons';

const {SubMenu} = Menu;
function Aside({location}){
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                defaultChecked
                theme="dark"
                style={{height: '100%'}}
            >
                <Menu.Item key="1" icon={<DesktopOutlined/>}>
                    <NavLink to="/">学生管理首页</NavLink>
                </Menu.Item>
                <SubMenu key="sub3" icon={<UsergroupAddOutlined />} title="学生管理">
                    <Menu.Item key="2">
                        <NavLink to="/student">查询学生</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/student/add">添加学生</NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );
}

export default withRouter(Aside);