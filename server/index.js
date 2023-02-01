const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const morgan=require('morgan')
const posts = require('./routes/posts')

const app =express();
const server =http.createServer(app)

app.use(morgan('tiny'))

app.use(express.json())
app.use(cors())
app.use('/',posts)

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/posts')
.then(()=> console.log('connected'))
.catch(()=>console.log('error'))


let PORT= process.env.PORT||4000
server.listen(PORT,()=> console.log('ready on port 4000'))