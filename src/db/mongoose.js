const mongoose = require('mongoose')
const db = require('./config')
mongoose.connect("mongodb+srv://test:test@cluster0-mtmq8.mongodb.net/test?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(console.log('connected with mongodb '))