if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:"mongodb+srv://test:test@cluster0-mtmq8.mongodb.net/test?retryWrites=true&w=majority"
}
}
else{
  module.exports = {mongoURI:"mongodb+srv://test:test@cluster0-mtmq8.mongodb.net/test?retryWrites=true&w=majority"
    }
}
