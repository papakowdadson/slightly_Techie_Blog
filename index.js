const express = require("express");
const bodyParser = require("body-parser");
const blogRouter = require("./routes/blog/blogRouter");
const Dotenv = require("dotenv")

const app = express();

Dotenv.config();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/blog',blogRouter);

app.listen(port,()=>{
    console.log('server running on port:',port)
})