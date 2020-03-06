
let express = require('express');
let app = express();
// var cors = require('cors');
//
// app.use(cors);

app.get('/file/:lang',function(req,res){
    console.log("I AM HERE")
    const fs = require('fs');
    let rawData = fs.readFileSync("./src/files/labels"+req.params.lang+".json");
    let labels = JSON.parse(rawData);
    res.send(labels);
});


app.get('/label/:key',function(req,res){
    console.log("label/key")
    console.log(req.params)
});

app.get('/label',function(req,res){
    const fs = require('fs');
    let rawData = fs.readFileSync("./src/files/labelsFR.json");
    let labels = JSON.parse(rawData);
    res.send(labels);
})

app.put("/label",function(req,res){

});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})