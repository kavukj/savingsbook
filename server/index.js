import bodyParser from 'body-parser';
import express from 'express';
import Connection from './db/database.js';
import router from './router/route.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",router);

//Connect to database

const username = process.env.MONGO_USER
const password = process.env.MONGO_PASS

Connection(username,password)

//Connect to node server
const PORT = 8000 || process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log("Server connected on " + PORT)
})  