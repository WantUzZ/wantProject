// 环境配置
let development = {
  system_port:8018,
  session_redis:{
    host:'127.0.0.1',
    db:4,
    port:6379,
    ttl:7*24*3600
  }
};

let test = {

};

let experience = {

};

let production = {

};

module.exports = {
  development,test,experience,production
}