var express = require('express');
var router = express.Router();
// mysql数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'XpcMySQl',
    password : 'xpc960928',
    database : 'my_db'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
connection.end();

var dataSuccess = {
    status: '100',
    msg: '登录成功',
    data: {
        userId: '1105912320',
        userName: 'jack',
        age: '18'
    }
};
var dataError = {
    status: '105',
    msg: '用户名或密码错误'
};
// 登录接口
router.post('/login',function (req, res, next) {
    // 打印post请求的数据内容
    console.log(req.body);
    // console.log(req.body.username);
    // console.log(req.body.password);
    if (req.body.username == "jack" && req.body.password == "123456") {
        res.end(JSON.stringify(dataSuccess));
    } else {
        res.end(JSON.stringify(dataError));
    }
});

module.exports = router;
