const router = require('express').Router()
const userService = require('../../service/userService')
module.export = [
  {
    path:'/user',
    method:'POST',
    middleware:[userService.login]
  }
]