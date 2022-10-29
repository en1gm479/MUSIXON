require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");


//connecting to mongodb
const dburl = process.env.MongoURI;
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected successfully...'))
    .catch((err) => console.log('DB could not connect!\nError: ',err));

app.get('/', (req, res) => {
    res.send("hello world!")
});


const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server running on http://localhost:${PORT}/`));