'use strict';
var express = require('express');
var router = express.Router();

var loginController = require('../controllers/LoginContoller');
router.get('/auth/user_login', loginController.list_login_Users);
router.post('/auth/save_login_user', loginController.save_users);
module.exports = router;