const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('this is home service')
})

app.listen(port, () => {
    console.log('this server in run 5000');
})

