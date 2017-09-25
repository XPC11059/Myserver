var express = require('express');
var router = express.Router();
// 连接mysql数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'xpc',
    password : 'xpc960928',
    database : 'my_db'
});
connection.connect();

// 增
// var  addSql = 'INSERT INTO user(name,age) VALUES (?,?)';
// var  addSqlParams = [ 'jack', '23'];
// connection.query(addSql,addSqlParams,function (err, result) {
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log(result);
// })
// // 删
// var  delSql = 'DELETE FROM user where id=11';
// connection.query(delSql,function (err, result) {
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log(result);
// });
// // 改
// var modSql = 'UPDATE user SET name = ?,age = ? WHERE Id = ?';
// var modSqlParams = ['tom', '3',10];
// connection.query(modSql,modSqlParams,function (err, result) {
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log(result);
// });
// 查询
var userGet = 'SELECT * FROM user WHERE name="jack"';
connection.query(userGet,function (err, result) {
    if (err){
        console.log(err.message);
        return;
    }
    console.log(result)
});


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
