var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booking = require('./model/booking')
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set("views", __dirname + "/views");
 
//模板类型指定为html
app.engine('html',ejs.__express)
 
//启动视图引擎
app.set('view engine','html')

app.listen(3000,function(){   //监听3708端口
    console.log("Server running at 3708 port");
});
module.exports = app;
