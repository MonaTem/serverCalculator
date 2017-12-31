'use strict';

var path = require('path');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
const add = "add";
const mult = "multiply";
//const work = "show_work=true";

app.get('/calculator/:operator/:first/:second', function(req, res) {
    var operator = req.params.operator;
    var first = parseInt(req.params.first);
    var second = parseInt(req.params.second);
    var query = req.query;
    let firstStr = first.toString();
    let secondStr = second.toString();
    let showWork = req.query.show_work;
    console.log(showWork);

   switch (operator) {
     case add:
           var sum = first + second;
           var sumStr = sum.toString();
           if (showWork === "true" || showWork === true) {
             console.log("we are true add");
             let workStr = `${firstStr} +  ${secondStr} = ${sumStr}`;
             res.send(workStr);
           } else {
             res.send(sumStr);
             }
           break;

     case mult:
           var product = first * second;
           var prodStr = product.toString();
           if (showWork === "true" || showWork === true) {
             console.log("we are true multiply");
             let workStr = `${firstStr} * ${secondStr} = ${prodStr}`;
             res.send(workStr);
           } else {
           res.send(prodStr);
           }
           break;

     }

    });

app.use(function(req, res) {
  res.send("Not found");
  res.status(404);

});

app.listen(port, function() {
  console.log('Listening on port', port);
});
