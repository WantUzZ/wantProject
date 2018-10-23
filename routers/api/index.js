const router = require('express').Router();
const userService = require('../../service/userService');

// 原先的方式
router.post('/user',(req,res)=>{
  console.info('login check ...')
  userService.login(req.body.username,req.body.password)
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


