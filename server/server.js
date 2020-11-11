const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();

let infoPath = path.join(__dirname, './forminfo.json');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/formsubmissions', (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email
    }
    fs.writeFile(infoPath, JSON.stringify(data), (err) => {
        if(err){
            console.log(err);
            console.log("UH OH");
            return;
        }
        console.log('It worked!');
    });
    // fs.writeFile(infoPath, JSON.stringify())
    res.send('Thanks for your submission!');
});

app.use(express.static(path.join(__dirname, '../public')));


// app.get('/', (req, res) => {
//     res.send('Hello from the server side...');
// });



app.listen(3000);