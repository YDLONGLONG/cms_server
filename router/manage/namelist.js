const Router = require("koa-router")
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../utils")

//得到权限列表
router.get("/", async ctx=>{
    //鉴权
    let token = ctx.request.headers['cms-token'];
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    let sql = `SELECT avatar,editable,id,username FROM user WHERE player='normal'`
    let result = await queryFN(sql)
    ctx.body=returnMsg(0,"列表请求成功",result);
});

//修改权限
router.post("/", async ctx=>{
    //鉴权
    let token = ctx.request.headers['cms-token'];
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    //前端传id修改权限 open：1开通2关闭
    let {id,open} = ctx.request.body;
    if(!id||!open){
        ctx.body = returnMsg(1,"参数错误");
        return;
    }
    //传有id
    let sql1 = `SELECT editable FROM user WHERE id=${id}`;
    let result1 = await queryFN(sql1);
    //有编辑权限
    if(result1[0].editable===1&&open===1){
        ctx.body = returnMsg(2,"已有编辑权限");
        return;
    }
    //无编辑权限
    if(result1[0].editable===0&&open===2){
        ctx.body = returnMsg(2,"未有编辑权限");
        return;
    }
    let sql2 = `UPDATE user SET editable=${open}`;
    await queryFN(sql2)
    ctx.body = returnMsg(0,"用户编辑权限修改成功");
});

module.exports = router;