> 一个空的express的项目架子

* 1、默认监听8018端口
* 2、登陆页用户名want密码123456


> 近期打算将一些最近接手项目中的优秀写法嵌入进去。
* 1、十分干净的路由层
```javascript
module.exports = [
  {
    path: '/api/v1/logout'
    method: 'POST'
    middleware: [Auth.logout]
  }
  {
    path: '/api/v1/user/profile'
    method: 'GET'
    middleware: [User.profile]
  }
  {
    path: '/api/v1/static/:userId/*'
    method: 'GET'
    middleware: [User.static]
  }
  {
    path: '/api/v1/socket/info'
    method: 'GET'
    middleware: [Socket.getSocketInfo]
  }
]
```