// 生产环境域名：http://xxx.com    开发环境域名：http://localhost
const host = "http://localhost";
// 生产环境端口：自定义         开发环境域名：9000
const port = 3001;

// 引入mysql
const mysql = require("mysql");

// 创建连接池
const pool = mysql.createPool({
    host: "localhost",  // 连接的服务器(代码托管到线上后，需改为内网IP，而非外网)
    port: 3306, // mysql服务运行的端口
    database: "cms", // 选择某个数据库
    user: "cms",   // 用户名
    password: "123456", // 用户密码
})

//对数据库进行增删改查操作的基础
const query = (sql,callback) => {
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows)
            connection.release()
        })
    })
}

const returnMsg = (errCode,message,data) => {
    return{
        errCode:errCode || 0,
        message:message || "",
        data:data || {}
    }
}

const queryFN = (sql) => {
    return new Promise((resolve,reject)=>{
        query(sql,(err,rows)=>{
            if(err) reject(err);
            resolve(rows)
        })
    })
}

module.exports = {
    host, port, query, returnMsg, queryFN
}
