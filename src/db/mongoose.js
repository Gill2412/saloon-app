const mongoose = require('mongoose')
const db = require('./config')
mongoose.connect('mongodb://127.0.0.1:27017/salon-api',{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(console.log('connected with mongodb '))