const Router = require('koa-router');
const router = new Router();
const login = require('./login')
const register = require('./register')

router.get('/', async (ctx) => {
    ctx.body = "管理接口";
})

router.use("/login", login.routes(), login.allowedMethods());
router.use("/register", register.routes(), register.allowedMethods());

module.exports = router;
