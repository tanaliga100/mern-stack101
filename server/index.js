import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

// imports 
import postRoutes from './Routes/posts.js'
const app = express()
// middleware 

app.use('/posts', postRoutes) 

// setUps
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors)


const CONNECTION_URI = "mongodb+srv://tanaliga100:12345@cluster0.smc8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`)))
    .catch(error => console.log(error.message))
