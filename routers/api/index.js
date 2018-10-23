const router = require('express').Router();
const userService = require('../../service/userService');
// module.exports = [
//   {
//     path:'/user',
//     method:'POST',
//     middleware:[userService.login]
//   }
// ]

// 那种干净路由的写法：
// applyRouter = (app,routers)=>{
//   for(let router of routers){
//     switch(router.method._.toUpper(string)){
//       case 'GET':
//         app.get.apply(app,args);
//         break;
//     }
//   }
// }
router.post('/user',(req,res)=>{
  userService.login(req.body.username,req.body.pwd)
  .then(data=>{
    if(data) {
      res.json({tag:'success',message:'success logining'});
    }else{
      res.json({tag:'faile',message:'username or pwd is warong...'});
    }
  })
  .catch(err=>{
    res.json({
      tag:'err',
      message:`${err.toString()}`
    })
  })
})

module.exports = router;


