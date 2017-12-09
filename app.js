var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var url = require('url');
const path = require('path');
const routes = require('./routes');
const model = require('./model');

var url1 = "mongodb://revathy:admin123@ds133746.mlab.com:33746/meanemp";
mongoose.connect(url1)
    .connection
        .on('connected',function(){
            console.log("successfully connected to "+ url1)
        })
        .on('error',function(err){
            console.log("database error "+ err)
        })
var app = express();
var port = 5000 ;
app.use(bodyParser.urlencoded({extended: true}));
app.use('/model',model);
app.use('/routes',routes);
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    next();
    });
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/employees', routes);


app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 5000);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
