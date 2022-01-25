const Router = require("koa-router")
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../../utils")
const moment = require("moment")

router.post('/',async ctx=>{
    //鉴权
    let token = ctx.request.headers['cms-token'];
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    //用户有无编辑权限
    let sql2 = `SELECT editable,username FROM user WHERE token='${token}'`;
    let result2 = await queryFN(sql2);
    //有编辑权限
    if(result2[0].editable===1){
        let {title,subTitle,content} = ctx.request.body;
        //判断前端传的参数
        if(!title||!content){
            ctx.body=returnMsg(1,"未填写必要参数");
            return;
        }
        let mydate = moment().format('YYYY-MM-DD hh:mm:ss');

        let sql1 = `INSERT INTO article VALUES (null,'${title}','${subTitle || ""}','${result2[0].username}','${mydate}','${content}')`;
        await queryFN(sql1);

        ctx.body=returnMsg(0,"文章添加成功");
        //无编辑权限
    }else{
        ctx.body=returnMsg(1,"用户没有编辑权限");
        return;
    }
})

module.exports = router;