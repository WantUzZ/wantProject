//入口文件 bin/wwww与app.js做了一个合并
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers');
const path = require('path');
// const cookieParser = require('cookie-parser');
const app = new express();
const session = require('express-session');
const config = require('./config.js')[process.env.NODE_ENV || 'development'];
const redisStore = require('connect-redis')(session);
const {app_logger,error_logger} = require('./log.js');

//处理静态的requests请求
app.use(express.static(path.join(__dirname, 'public')));
//设置view路径和模版
app.set('views',path.join(__dirname,'views'));
//设置渲染引擎 ejs/jade
app.set('view engine is ejs','ejs');
//-- app.set('view engine is jade','jade') 


//app.use配置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cookieParser());

//session相关设置
app.use(session({
  store: new redisStore(config.session_redis),//使用redis存储session，相关redis配置见session_redis
  secret:'wantProject', //用来对session id相关的cookie进行签名
  resave:false, //是否每次都重新保存会话，建议false
  saveUninitialized:false,//是否自动保存为初始化的会话，建议false
  cookie:{
    maxAge:7*24*3600*1000 //有效期单位毫秒
  }
}));

app.use('/',router);

//捕获404错误
app.use((req,res,next)=>{
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//错误处理 开发环境才会打印错误信息
app.use((err,req,res,next)=>{
  if(process.env.NODE_ENV == 'development'){
    error_logger(err);
    res.status(500).send(err.stack);
  }else{
    res.render('./error.ejs');
  }
})

app.listen(config.system_port,()=>{
  app_logger(`环境:${process.env.NODE_ENV|| 'development'} 监听端口:${config.system_port}`);
})

module.exports = app;