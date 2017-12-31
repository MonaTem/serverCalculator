'use strict';

var path = require('path');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
const add = "/add/:first/:second";
const mult = "/multiply/:first/:second";
const work = "show_work=true";

app.get('/calculator:route', function(req, res) {
    var route = req.params.route;
    var first = req.params.first;
    var second = req.params.second;
    var query = req.query;
    let firstStr = first.toString();
    let secondStr = second.toString();

   switch (route) {
     case add:
           var sum = first + second;
           var sumStr = sum.toString();
           if (query === work) {
             let workStr = "firstStr + '+ ' + secondStr + ' =' sumStr";
             res.sen(sumStr);
           } else {
             res.send(sumStr);
             }
           break;

     case multiply:
           var product = first * second;
           var prodStr = product.toString();
           if (query === work) {
             let workStr = "firstStr + '*  ' + secondStr + ' =' prodStr";
             res.sen(prodStr);
           } else {
           res.send(prodStr);
           }
           break;

     }

    });

app.use(function(req, res) {
  res.sendStatus(404);
  res.send("Not found");
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
