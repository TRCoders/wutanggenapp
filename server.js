const express = require('express')
const app = express()
let port = process.nextTick.PORT || 5000;

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index.ejs')
});

app.listen(port)
console.log('Go to port ' + port)