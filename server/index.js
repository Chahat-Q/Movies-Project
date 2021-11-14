import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express(); //initializing the app and use different methods on this
dotenv.config();


app.use(express.json({limit : "30mb", extended : true})); //setting bodyparser to send request
app.use(express.urlencoded({limit : "30mb", extended : true}));

app.use(cors());
app.use('/posts', postRoutes); //adding prefix of posts to every

// const CONNECTION_URL = 'mongodb+srv://moviesChahat:chahatDB@cluster0.6lk70.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
    .then(()=> app.listen(PORT , ()=> console.log(`Server running at ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify' , false); //to make sure not to get error