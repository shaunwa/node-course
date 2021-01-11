import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.type = 'application/json';
    await next();
});

app.use(async (ctx, next) => {
    ctx.body = { name: 'John Doe', id: '123' };
    await next();
});

app.use(async (ctx, next) => {
    ctx.cookies.set('trackingId', '123');
});

app.listen(3000, () => {
    console.log("Koa server is listening on port 3000");
});