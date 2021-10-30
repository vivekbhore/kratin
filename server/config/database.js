const mongoose = require('mongoose')

// mongoose connection configuration
// const setupDB = ()=>{
//     mongoose.connect('mongodb://localhost:27017/ticket-master-app',{ useNewUrlParser: true ,useUnifiedTopology: true })
//     .then(()=>{
//         console.log('connected to db')
//     })
//     .catch((err)=>{
//         console.log('ERROR',err)
//     })
// }

const setupDB = ()=>{
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("connected to db");
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
}

module.exports = setupDB

