const Koa = require('koa')
const config = require('./app.config')

const app = new Koa()
const serve = require('koa-static')
const mount = require('koa-mount')
const colors = require('colors')

const path = require('path')

app.use(mount('/', serve('./public')));

app.listen(config.port)

console.log(`
🚀 File server is listening on port ${config.port}
  ◽ Directory: ${colors.cyan(path.join(__dirname, 'public'))}
  ◽ Address: ${colors.cyan(`http://localhost:${config.port}/`)}
`)