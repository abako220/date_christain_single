'use strict';
var express = require('express');
var router = express.Router();

var loginController = require('../controllers/LoginContoller');
router.get('/user_login', loginController.list_login_Users);
module.exports = router;