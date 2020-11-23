const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
  });

app.post('/quiz', (req, res, next) => {
     const answer = "NodeJs Framework";
    const chosen = req.body.option;

    if (chosen == answer) {
        res.send("correct answer");

    } else {
        res.send("wrong answer");
    }
    
});
app.listen(3000);
