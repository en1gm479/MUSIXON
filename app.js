require("dotenv").config();
const express = require("express");
const ejs = require('ejs');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


//middlewares
app.use(express.static('static'));   
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

//connecting to mongodb
const dburl = process.env.MongoURI;
// mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB connected successfully...'))
//     .catch((err) => console.log('DB could not connect!\nError: ',err));

app.get('/', (req, res) => {
    res.render('home.ejs',{
        isAuth:false,
        title: ''
    })
});

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);

app.get('/login', (req, res) => {
    res.render('login.ejs',
    {
        isAuth:true,
        title: ''
    })
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs',
    {
        isAuth:true,
        title: 'signup |'
    })
})


app.get('/queue',(req,res)=>{
    res.render('queue',{
        isAuth:false,
        title:"queue |"
    })
})

app.get('/seeall',(req,res)=>{
    res.render('seeall',{
        isAuth:false,
        title:"All songs |"
    })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,console.log(`Server running on http://localhost:${PORT}/`));