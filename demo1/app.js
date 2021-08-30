const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();

app.use(koaStatic('./'));

app.listen(3000, () => {
  console.log('serve run in 3000')
});