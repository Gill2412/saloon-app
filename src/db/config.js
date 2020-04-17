if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:'mongodb+srv://hamayun:hamayun@saloonapp-labbs.mongodb.net/test?retryWrites=true&w=majority'
}
}
else{
  module.exports = {mongoURI:'mongodb://127.0.0.1:27017/salon-api'}
}