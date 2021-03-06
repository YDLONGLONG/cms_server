const Koa = require('koa2');
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const cors = require("koa2-cors");
const bodyParser = require('koa-bodyparser');
const { host, port } = require("./utils")
const manage = require('./router/manage')
const web = require('./router/web')
const nomatch = require('./router/nomatch')
const static = require('koa-static')
const path = require("path")

router.get("/", async ctx => {
    ctx.body = "根路径"
})

router.use("/manage", manage.routes(), manage.allowedMethods());
router.use("/web", web.routes(), web.allowedMethods());
router.use("/404", nomatch.routes(), nomatch.allowedMethods());
app.use(async (ctx, next) => {
    await next();
    if (parseInt(ctx.status) === 404) {
        ctx.response.redirect("/404")
    }
})

app.use(cors({
    origin:function(ctx){
        if(ctx.url==='/manage/upload'){
            return "*"
        }
    }
}));
app.use(bodyParser());
app.use(static(path.join(__dirname,"static")));
app.use(static(path.join(__dirname,"router/manage/upload")));
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
    console.log(`Server is running at ${host}:${port}`);
})