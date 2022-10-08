const express = require('express');
const app = express();


//css file

app.use(express.static('public'));



app.get('/', function(req, res) {

    res.sendFile((__dirname+'/index.html'));

    //res.status(404).send('<h1> Page not found </h1>');
    

});



app.listen(3000, function(req, res) {

    console.log('listening on port 3000');

})