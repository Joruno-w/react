import React from 'react';
import Layout from "./common/layout";
function Test() {
    return (
        <div>
            <Layout left={<h1>左侧边栏</h1>} right={<h1>右侧边栏</h1>} gap={10}>
                主区域
            </Layout>
        </div>
    );
}

export default Test;
