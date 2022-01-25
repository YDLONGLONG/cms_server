const Router = require("koa-router")
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../../utils")
const moment = require("moment")

//文章编辑
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
        let {id,title,subTitle,content} = ctx.request.body;
        //判断前端传的参数
        if(!id||!title||!content){
            ctx.body=returnMsg(1,"未填写必要参数");
            return;
        }
        //判断文章是否存在
        let sql = `SELECT * FROM article WHERE id=${id}`;
        let result = await queryFN(sql);
        //文章存在并修改
        if(result.length>0){
            let mydate = moment().format('YYYY-MM-DD hh:mm:ss')

            let sql1 = `UPDATE artile SET title='${title}',subTitle='${subTitle || ""}',content='${content || ""}',date='${mydate}',author='${result2[0].username}' WHERE id=${id}`;
            await queryFN(sql1);

            // let sql3 = `SELECT id,title,subTitle,date FROM article`
            // let result3 = await queryFN(sql3)
            ctx.body=returnMsg(0,"文章修改成功");

        }else{
            ctx.body=returnMsg(1,"文章不存在");
            return;
        }
        //无编辑权限
    }else{
        ctx.body=returnMsg(1,"用户没有编辑权限");
        return;
    }

})

module.exports = router;