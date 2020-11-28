import React from 'react';
import { Layout } from 'antd';
import styles from './index.css';
const { Header, Sider,Content } = Layout;
function Index(props) {
    return (
        <Layout>
            <Header>
                {props.header}
            </Header>
            <Layout className={styles.main}>
                <Sider width={200}>
                    {props.aside}
                </Sider>
                <Layout>
                    <Content style={{
                        padding: "20px 20px 0 20px"
                    }}>
                        {props.content}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Index;