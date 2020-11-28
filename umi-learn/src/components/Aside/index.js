import React from 'react';
import {withRouter, NavLink} from 'umi';
import {Menu} from "antd";
import {UsergroupAddOutlined, MenuUnfoldOutlined, MenuFoldOutlined, DesktopOutlined} from '@ant-design/icons';

const menuConfig = [
    {key: '/', title: '学生管理首页'},
    {
        key: 'student',
        title: '学生管理',
        children: [
            {
                key: '/student',
                title: '查询学生'
            },
            {
                key: '/student/add',
                title: '添加学生'
            }
        ]
    }
];

const {SubMenu} = Menu;

function Aside({location}) {
    const menus = menuConfig.map(it=>{
        if (it.children){
            return(
                <SubMenu key={it.key} title={it.title}>
                    {it.children.map(t=><Menu.Item key={t.key}>
                        <NavLink to={t.key}>{t.title}</NavLink>
                    </Menu.Item>)}
                </SubMenu>
            );
        }else{
            return(
                <Menu.Item key={it.key}>
                    <NavLink to={it.key}>{it.title}</NavLink>
                </Menu.Item>
            );
        }
    });
    const openKeys = new Set([]);
    for (const item of menuConfig) {
        if (item.children){
            for (const child of item.children) {
                if (child.key === location.pathname){
                    openKeys.add(item.key);
                }
            }
        }
    }
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                defaultOpenKeys={[...openKeys]}
                theme="dark"
            >
                {menus}
            </Menu>
        </>
    );
}

export default withRouter(Aside);