var express = require('express')
var app = express();

app.set('view engine', 'jade')

app.get('/', async (req, res) => {

});

var server = app.listen(3000, function() {
    console.log('Application started at port 3000');
});