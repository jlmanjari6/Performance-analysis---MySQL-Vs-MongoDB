var mysql = require('mysql');
var express    = require("express");
var app = express();
var bodyParser = require('body-parser');
var stationids = require('./weatherStation.json')

app.use(bodyParser.urlencoded({
    extended: true
  }));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'XXXXX',
    database : 'casestudy'
  });
  
  connection.connect();

  app.listen(5000);

  app.get("/",function(req,res){ 

    res.render(__dirname + '/stations.ejs', {stations: stationids});
    });
    
    
app.post('/',function(req,res){   

    selectedValue = req.body.selectpicker;

    var query = 'SELECT * from brazil_weather where wsid = ' + selectedValue + ' limit 100000;';

     // to fetch station records by id
     var time1=Date.now();
     connection.query(query + '', function(err, rows, fields) {
      var time2=Date.now();
      var duration=time2-time1;
        if (!err){
          console.log(duration)
            res.render(__dirname + '/mysql_table.ejs', {data: rows, duration:duration})
      }
        else
          console.log(err);
        });
})
  
  
