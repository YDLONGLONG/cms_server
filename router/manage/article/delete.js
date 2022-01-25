const Router = require("koa-router")
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../../utils")

router.post('/',async ctx=>{
    //鉴权
    let token = ctx.request.headers['cms-token'];
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    //获取文章id
    let {id} = ctx.request.body;
    if(!id){
        ctx.body = returnMsg(1,"参数错误");
        return;
    }
    //判断是否有删除权限
    let sql2 = `SELECT editable FROM user WHERE token='${token}'`
    let result2 = await queryFN(sql2)
    if(result2[0].editable===0){
        ctx.body=returnMsg(2,"用户无删除权限");
        return;
    }
    //判断文章是否存在
    let sql = `SELECT * FROM article WHERE id=${id}`;
    let result = await queryFN(sql);
    if(result.length==0){
        ctx.body=returnMsg(2,"文章不存在");
        return;
    }
    //删除文章
    let sql1 = `DELETE FROM article WHERE id=${id}`
    await queryFN(sql1)
    ctx.body=returnMsg(0,"删除成功");
})

module.exports = router;