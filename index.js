

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var calculate = weight/(height*height);

  res.send("Your BMI or Body Mass Index inspect " + calculate);
});

app.listen(3000, function(req, res){
  console.log("The server has started on port 3000");
});
