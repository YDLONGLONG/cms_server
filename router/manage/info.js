const Router = require('koa-router');
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../utils")

router.get('/',async ctx=>{
    // ctx.request 请求   ctx.request.headers 请求头   ctx.request.body 请求体
    // ctx.response 响应   ctx.respond.body 返回给前端的数据
    let token = ctx.request.headers['cms-token'];
    //鉴权
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    let sql = `SELECT username,token,avatar FROM user WHERE token='${token}'`
    let result = await queryFN(sql);
    ctx.body = result[0];
})

router.post('/',async ctx=>{
    let token = ctx.request.headers['cms-token'];
    //鉴权
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    //鉴权成功
    let { username, password } = ctx.request.body;
    //检索数据库中用户名
    let sql3 = `SELECT * FROM user WHERE username='${username}'`
    let result3 = await queryFN(sql3);
    if(result3.length>0){
        ctx.body = returnMsg(1,"用户名已存在");
        return;
    }
    //检索旧值
    let sql2 = `UPDATE user SET username='${username}',password='${password}' WHERE token='${token}'`
    let result2 = await queryFN(sql2);

    let sql = `UPDATE user SET username='${username || result2[0].username}',password='${password || result2[0].password}' WHERE token='${token}'`
    await queryFN(sql);
    //重新查询返回给前端
    let sql1 = `SELECT username,token,avatar FROM user WHERE token='${token}'`
    let result = await queryFN(sql1);
    //ctx.body = result[0];
    ctx.body = returnMsg(0,"修改成功",{
        username:result[0].username,
        "cms-token":result[0].token,
        avatar:result[0].avatar
    })
})

module.exports = router;