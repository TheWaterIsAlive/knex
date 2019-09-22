const express = require('express')
const app = express()
const router = express.Router()
const data = require('./data')


const port = 8080




app.listen(port, () => {
    console.log(`Server started on port ${port}`);


});


app.get('/api/employees', (req, res))