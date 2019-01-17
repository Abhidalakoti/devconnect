const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./route/api/users');
const profile = require('./route/api/profile'); 
const posts = require('./route/api/post');
//DB Config

const db = require('./config/keys').mongoURI;
//Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/',(req,res) =>res.send('Hello World!'));

//Use Routes
app.use('./api/users',users);
app.use('./api/profile',profile);
app.use('./api/posts',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
