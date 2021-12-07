const express = require('express')
const router = require('./config/routes')
const setupDB = require('./config/database')
const cors = require('cors')
require("dotenv").config(); 

const port = process.env.PORT || 3050;




const app = express()


setupDB()

app.use(express.json())
app.use(cors())

app.get("/test", (req, res) => {
  res.send("Hello my dear friend");
});

app.use('/',router)


app.listen(port, ()=>{
    console.log('Listening to port: ', port)
})