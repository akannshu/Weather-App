var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',function(req, res){
 res.render('doraibu');
});

app.post('/', urlencodedParser, function(req, res){
     console.log(req.body);
     let lat = parseFloat(req.body.lat)
     let lon = parseFloat(req.body.lon)
     let WEATHER_REQ_URL = `https://api.openweathermap.org/data/2.5/weather?lat=`+lat+`&lon=`+lon+`&appid=0ac9e90b4db5275049f98e5e2c61a22c`
      request(WEATHER_REQ_URL,function(err,res,body){
        if(err){
           console.log(err);
        }
        console.log(body);
   });
   res.render('doraibu');
});

console.log('listening at port 8888');
app.listen(process.env.PORT || 8888);
