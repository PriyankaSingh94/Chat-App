const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db');
let loan_part_0009b606f = require('./models/Business');
// const businessRoute = require('./routes/business.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database'+ err)}
);

var Schema = mongoose.Schema;

// login schema
    var adminLogin = new Schema({
        username: String,
        password: String
    });

var version=process.env.version || "1.0"

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'../src')));

app.get('/getversion',function(req,res){
  console.log('Version '+version);
  res.status(200).json({version:version})
});

app.get('/loans', function(req, res){
  console.log("inside");
	loan_part_0009b606f.find({}, function(err, docs){
		if(err) res.json(err);
		else   res.send(docs);
	});
});
// app.use('/loans', businessRoute);

// app.use('/',function(req,res){
//   res.send();
// });
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
  console.log('Version '+version);
});