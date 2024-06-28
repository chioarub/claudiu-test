const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.get('/test', (req, res) => {
    console.log('----->>>>>', req.query);
    res.send('Hello World Claudiu how are you?')
});

app.listen(9999, 'localhost', () => {
    console.log('*** APP STARTED **');
})