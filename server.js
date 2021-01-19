const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()) // body parser json

const dbKey = require('./config/keys').mongoURI;

app.use('/api/sampleItem', require('./routes/api/sampleRoute'));

mongoose.connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) // returns a promise
    .then(console.log('MongoDB Connected'))
    .catch(err => console.log(err.message))

// Port for backend
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));