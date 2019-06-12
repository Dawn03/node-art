

//获取文件操作对象实例
// var fs = require('fs');
// var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var template = require('art-template');

app.set('views', path.join(__dirname, 'views'));

template.config('base', '');
template.config('extname', '.html');
// 
app.engine('.html', template.__express);
app.set('view engine', 'html');




var routes = require('./routes/index');
app.use(routes);
// app.use('/', routes);
//创建服务器，并绑定8888端口
app.listen(3000)
console.log('3000')

