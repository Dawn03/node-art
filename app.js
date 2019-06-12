let express = require('express');
let app = express();
let path = require('path');

app.set('views', path.join(__dirname, 'views'));

//设置静态目录
// app.use(express.static(__dirname + "/static"));
app.use(express.static(path.join(__dirname, 'views')))
// app.use(express.static('static'));
// template.config('base', '');
// template.config('extname', '.html');
// app.engine('.html', template.__express);
// app.set('view engine', 'html');

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

let routes = require('./routers/index');
app.use(routes);
app.listen(3005);
console.log('server start at localhost:3005');