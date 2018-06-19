var mongoose = require('mongoose');
var express = require('express'),
    app = express(),

    port = process.env.PORT || 3000;
// var router = express.Router();

bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const URI = 'mongodb://127.0.0.1:27017/date_christain_single';

mongoose.connect(URI, {
    keepAlive: 120,
    socketTimeoutMS: 0,
    reconnectTries: 30
});

var loginRouter = require('../date_christain_api/api/routes/LoginRoutes'); //importing route
app.use(loginRouter); //register the route

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(port);
console.log('Server Started at Port : ' + port);
