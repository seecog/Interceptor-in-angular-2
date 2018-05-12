var express = require('express');
var app =express();
var route = express.Router();
//cors start
var cors = require('cors');
var originsWhitelist = [
    'http://localhost:4200', //this is front end url
    ];
    var corsOptions = {
    origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
    },
    credentials:true
    }
    app.use(cors(corsOptions));
//cors end
route.get('/data',function(req,res){
    console.log('The headers are ',req.headers)
    res.json({data : 'Hello world'})
})

app.use('/api',route);
app.listen(3001,function(){
    console.log('Server starts')
})