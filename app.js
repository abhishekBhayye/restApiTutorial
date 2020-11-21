const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middlewares


// ROUTE
app.get('/', (req,res) => {
    res.send('We are home');
})

app.get('/posts', (req,res) => {
    res.send('We are on posts');
})

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connect to DB!')
);

// How to start listening to the server
app.listen(3000);