const Router = require('koa-router');
const router = new Router();
const { returnMsg, queryFN } = require("../../utils")

router.post('/', async (ctx) => {
    let { username, password } = ctx.request.body;
    if (username && password) {
        let sql = `SELECT * FROM user WHERE username='${username}'`
        let result = await queryFN(sql)
        if (result.length > 0) {
            ctx.body = returnMsg(2, "注册失败", "该用户已注册")
        } else {
            //editable: 0否1是
            //player: normal vip
            let sql1 = `INSERT INTO  user VALUES (null, '${username}', '${password}', null, 'avatar.jpg','normal',0)`
            await queryFN(sql1)
            ctx.body = returnMsg(0, "注册成功", result)
        }
    } else {
        ctx.body = returnMsg(1, "请求失败", "参数错误")
    }
})

module.exports = router;