import React from 'react';
import { Typography,Space,Button } from 'antd';

const { Title,Text,Link } = Typography;
function Index(props) {
    return (
        <>
            <h1>学生管理首页</h1>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <div>
                <Title>h1. Ant Design</Title>
                <Title level={2}>h2. Ant Design</Title>
                <Title level={3}>h3. Ant Design</Title>
                <Title level={4}>h4. Ant Design</Title>
                <Title level={5}>h5. Ant Design</Title>
            </div>
            <Space direction="vertical">
                <Text>Ant Design (default)</Text>
                <Text type="secondary">Ant Design (secondary)</Text>
                <Text type="success">Ant Design (success)</Text>
                <Text type="warning">Ant Design (warning)</Text>
                <Text type="danger">Ant Design (danger)</Text>
                <Text disabled>Ant Design (disabled)</Text>
                <Text mark>Ant Design (mark)</Text>
                <Text code>Ant Design (code)</Text>
                <Text keyboard>Ant Design (keyboard)</Text>
                <Text underline>Ant Design (underline)</Text>
                <Text delete>Ant Design (delete)</Text>
                <Text strong>Ant Design (strong)</Text>
                <Link href="https://ant.design" target="_blank">
                    Ant Design (Link)
                </Link>
            </Space>
        </>
    );
}

export default Index;