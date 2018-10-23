const router = require('express').Router();

router.use('*',(req,res,next)=>{
    if(req.headers.referer){
      console.info(`${req.headers.referer} ${req.method} ${req.url} query:${JSON.stringify(req.query)} body:${JSON.stringify(req.body)}`);
    }
    next();
})

router.get('/',(req,res)=>{
  res.redirect('/view/login');
})

//api
router.use('/api',require('./api'));

//view
router.use('/view',require('./view'));

module.exports = router;