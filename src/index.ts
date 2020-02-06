let express = require('express')
let apiRoutes = require("./api/api-routes.ts")
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});


var db = mongoose.connection;
    if(!db) {
        console.log("Error connecting db")
    } else{
        console.log("Db connected successfully")
    }

app.use('/rest/1.0', apiRoutes)

app.listen(port, function () {
     console.log("Running node test on port :: " + port);
});