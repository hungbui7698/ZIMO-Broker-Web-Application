var express = require("express");
var path=require('path')
const mongoose = require("mongoose");
var InfrastructureRoutes = require("./routes/Infrastructure");
var CloudFlavourRoutes = require("./routes/CloudFlavour");
var NetworkFlavourRoutes = require("./routes/NetworkFlavour");
var AppRoutes = require("./routes/App");
var AppInstanceRoutes = require("./routes/AppInstance");
var UserGetOptions= require("./routes/UserGetOptions");
var AppGroupRoutes = require("./routes/AppGroup");

var SliceRequestRoutes = require("./routes/SliceRequest");

var { initConfig } = require("./Controller/SliceRequest");

var app = express();
var bodyParser = require("body-parser");

app.use(express.static('client'))

/*Enable CORS*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(bodyParser.json());

app.use('/app', AppRoutes);
app.use('/infrastructure', InfrastructureRoutes);
app.use('/cloudflavour', CloudFlavourRoutes);
app.use('/appgroup', AppGroupRoutes);
app.use('/networkflavour', NetworkFlavourRoutes);
app.use('/appinstance', AppInstanceRoutes);
app.use('/getoptions', UserGetOptions);

app.use('/slicerequest', SliceRequestRoutes);

app.use('/', (req,res,next)=>{
  const clientPath = path.join(__dirname, 'client', 'index.html');
  res.status(200).sendFile(clientPath);
})
let dburl =
  "mongodb+srv://hungbui7698:hungbui7698@cluster0.ukrpm.mongodb.net/WebAppEHealth?retryWrites=true&w=majority";
mongoose.connect(dburl).then(() => {
   app.listen(80);
});
