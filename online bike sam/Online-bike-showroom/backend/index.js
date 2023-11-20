const express = require('express')
const app = express()
const port = 3000

const mongoDB = require("./db")
mongoDB();
const cors=require('cors');
app.use(
    cors({
      origin: "*",
      methods: "GET, POST, PUT, DELETE",
      allowedHeaders: "Content-Type, Authorization",
    })
  );
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.use('/api', require("./Routes/myOrderData"));
app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Example connected to port ${port}`)
})