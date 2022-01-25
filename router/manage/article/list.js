const Router = require("koa-router")
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../../utils")

router.post('/',async ctx=>{
    //总文章数
    let sql = `SELECT COUNT(*) ROWS FROM article`
    let result = await queryFN(sql)
    let total = result[0].ROWS;
    //获取前端当前页码和每页个数
    let {current,counts} = ctx.request.body;
    if(!current||!counts){
        ctx.body=returnMsg(1,"参数错误")
    }

    let sql1 = `SELECT id,title,subTitle,date FROM article LIMIT ${(current-1)*counts},${counts}`;
    let result1 = await queryFN(sql1)
    ctx.body=returnMsg(0,"分页查询成功",{
        current,counts,total,
        arr:result1
    })
})

module.exports = router;