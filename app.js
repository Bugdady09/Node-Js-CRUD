const express = require('express')
const app = express()
require('express-async-errors');
const mongoose = require('mongoose')
const url = 'mongodb://localhost/student'
const db = require('./db/db')
const emplyeeRoutes = require('./controllers/student.controller')
const studentRouter = require('./routers/students')




app.use(express.json())

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function() {
    console.log('connected ...')
})


app.use('/students', studentRouter)


//mysql routers
app.use('/api/employees', emplyeeRoutes)

//npm i express-async-errors 
//for global handle error
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500 ).send('Something went wrong')
  });




//connet db
db.query("select 1")
.then(() => console.log('db connected succeeded'))
.catch(err => console.log('db connection failed. \n' + err))


app.listen(9000, function() {
    console.log('Server started')
})