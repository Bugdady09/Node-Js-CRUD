const express = require('express')
const router = express.Router()

router.get('/hello', (req, res)=> {
    console.log('Hello World!')
    res.send('Hello World!')
})

module.exports= router