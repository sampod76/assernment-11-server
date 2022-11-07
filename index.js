const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

//meadile wear

app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.9yhpi6m.mongodb.net/?retryWrites=true&w=majority`;

app.get('/', (req, res) => {
    res.send('this is home service')
})

app.listen(port, () => {
    console.log('this server in run 5000');
})

