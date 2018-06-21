var mongoose = require('mongoose');
var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser');
const app = express();

    port = process.env.PORT || 3000;
// var router = express.Router();


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const URI = 'mongodb://127.0.0.1:27017/date_christain_single';

mongoose.connect(URI, {
    keepAlive: 120,
    socketTimeoutMS: 0,
    reconnectTries: 30
});

var loginRouter = require('./api/routes/LoginRoutes'); //importing route

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(loginRouter); //register the route

app.use(function (req, res) {

    res.status(404).send({ url: req.originalUrl + ' not found' })

});


app.listen(port);
console.log('Server Started at Port : ' + port);
