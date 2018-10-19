const router = require('express').Router()
const {http_logger} = require('../utils/logFormatter')

router.use('*',(req,res,next)=>{
  http_logger(`${req.headers.referer} ${req.method} ${req.url} query:${JSON.stringify(req.query)} body:${JSON.stringify(req.body)}`);
    next();
})

router.use('/',(req,res)=>{
  res.redirect('/view/login')
})

//api
router.use('/api',require('./api'))

//view
router.use('/view',require('./view'))

module.export = router