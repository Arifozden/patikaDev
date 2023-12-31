/*
Koa.js ile web sunucumuzu yazalım.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.originalUrl === "/") {
        ctx.response.type = "text/html";
        ctx.body = `<h1>HOME PAGE</h1>`
    } else if (ctx.originalUrl === "/contact") {
        ctx.response.type = "text/html";
        ctx.body = `<h1>CONTACT PAGE</h1>`
    } else if (ctx.originalUrl === "/about") {
        ctx.response.type = "text/html";
        ctx.body = `<h1>ABOUT PAGE</h1>`
    } else {
        ctx.response.type = "text/html";
        ctx.body = `<h1>404 ERROR PAGE</h1>`
    }
});

const port = 3000;

app.listen(port);
