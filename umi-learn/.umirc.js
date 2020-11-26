export default {
    proxy: {
        '/api':{
            target: 'http://open.duyiedu.com',
            changeOrigin: true
        }
    }
}