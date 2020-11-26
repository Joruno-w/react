export default {
    routes: [
        {
            path: '/',
            component: "../layouts/index",
            exact: false,
            routes: [
                {
                    path: '/',
                    component: './index',
                    title: '首页',
                },
                {
                    path: '/login',
                    component: './Login',
                    title: '登录页',
                },
                {
                    path: '/welcome',
                    component: './Welcome',
                    title: '欢迎页',
                    wrappers: ["@/routes/PrivateRoute"]
                }
            ]
        }
    ]
}