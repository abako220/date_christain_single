//'use strict';
var LoginModel = require('../models/LoginModel.js');
/**
 * @method - Save new user in the login table
 * @param - @param req, res
 * @returns Mixed|array|Json
 */

exports.save_users = function (req, res) { 
    
    var new_user = new LoginModel({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        surname: req.body.surname,
        first_name: req.body.first_name,
        other_name: req.body.other_name
    });

    new_user.save(function (err, user){
        if (err) {
            res.status(401).json({
                message: err
            });
            console.log(err);
        } 
        res.status(200).json({'status':true, 'data':user,'message': 'user successfully added'});
 });   
 }

/**
 * @method return the number of Users that can LoggedIn
 * @param req, res
 * @returns Mixed|array
 */


exports.list_login_Users = function(req, res){
    LoginModel.find({}, function(err, login_users){
        if(err)
            res.send(err);

        res.json(login_users);
    });
}