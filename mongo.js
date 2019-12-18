// Retrieve
var MongoClient = require('mongodb').MongoClient;
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var stationids = require('./weatherStation.json')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
  }))

var response;
var dbo;
var selectedValue;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  if(!err) {
    console.log("We are connected");
    dbo = db.db("mydb")
  }
  else{
      console.log("not connected!");
  }
});

app.listen(3000, function() {
    console.log('listening on 3000')
  })


app.get('/', function(req, res) {    
    // to fetch station ids    
    res.render(__dirname + '/stations.ejs', {stations: stationids});          
});


app.post('/',function(req,res){   

    selectedValue = req.body.selectpicker
    
     // to fetch station records by id
     var query = { "wsid": Number(selectedValue) };
     var time1=Date.now();
     dbo.collection("casestudy").find(query).limit(100000).toArray(function(err, result) {
       var time2=Date.now();
       var duration=time2-time1;
       if (result) {
         console.log(duration)
        res.render(__dirname + '/mongo_table.ejs', {data: result,duration:duration})
    }
       else
       console.log(err);
     });
})

