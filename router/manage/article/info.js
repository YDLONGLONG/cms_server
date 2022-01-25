const Router = require("koa-router")
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../../utils")

//前端传id获取文章
router.get('/:id',async ctx=>{
    //鉴权
    let token = ctx.request.headers['cms-token'];
    if(!jwtVerify(token)){
        ctx.body = returnMsg(2,"查询用户信息失败","token过期或用户不存在");
        return;
    }
    //得到前端传来的id
    let id = ctx.url.split('/')[ctx.url.split('/').length-1]
    let sql = `SELECT * FROM article WHERE id=${id}`;
    let result = await queryFN(sql)
    if(result.length>0){
        ctx.body=returnMsg(0,"文章获取成功",result[0])
    }else{
        ctx.body=returnMsg(1,"文章不存在",result[0])
    }
})

module.exports = router;