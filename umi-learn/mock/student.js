import Mock from 'mockjs';
export default {
    "GET /api/student/findAll":{
        msg: '查询成功',
        status: "success",
        data: Mock.mock({
             "data|50-100":[
                 {
                     name: "@cname",
                     birthday: "@date",
                     "sex|1": false,
                     mobile: /^1\d{10}$/,
                     "ClassId|1-20":1
                 }
             ]
        }).data
    }
}