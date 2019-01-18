const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const mongoose = require('mongoose');


const users = require('./routes/api/Users');
const profile = require('./routes/api/profile'); 
const posts = require('./routes/api/post');
//DB Config

const db = require('./config/keys').mongoURI;
//Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/',(req,res) =>res.send('Hello World!'));

//Use Routes
app.use('./api/Users',users);
app.use('./api/profile',profile);
app.use('./api/posts',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
