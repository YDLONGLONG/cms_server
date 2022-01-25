const Router = require('koa-router');
const router = new Router();
const { returnMsg, queryFN, jwtVerify } = require("../../utils")

router.get('/', async (ctx) => {
    ctx.body = "前端接口";
})

router.get('/nav', async (ctx) => {
    let sql = `SELECT * FROM nav`
    let result = await queryFN(sql);
    ctx.body = returnMsg(0,"请求成功",result);
})

router.get('/banner', async (ctx) => {
    let sql = `SELECT * FROM banner`
    let result = await queryFN(sql);
    ctx.body = returnMsg(0,"请求成功",result);
})

router.get('/list', async (ctx) => {
    let sql = `SELECT id,title,author,date FROM article`
    let result = await queryFN(sql);
    ctx.body = returnMsg(0,"请求成功",result);
})

router.get('/article', async (ctx) => {
    let id = ctx.request.query.id;
    let sql = `SELECT * FROM article WHERE id=${id}`;
    let result = await queryFN(sql);
    ctx.body = returnMsg(0,"请求成功",result[0]);
})

module.exports = router;
