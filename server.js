var path = require('path');
var express = require('express');
var router = express.Router('');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, '/public')));
router.get('/home', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
app.listen(app.get('port'), function() {
    console.log('listening');
});
