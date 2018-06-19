var LoginModel = require('../models/LoginModel.js');
var user = new LoginModel({
    username: "troy220",
    password: "troy220",
    role: 'Admin',
    surname: "Abako",
    first_name: "Valentine",
    other_name: "Elijah"

});

// call the built-in save method to save to the database
/*user.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully!');
});

**/

exports.list_login_Users = function(req, res){
    LoginModel.find({}, function(err, login_users){
        if(err)
            res.send(err);

        res.json(login_users);
    });
}