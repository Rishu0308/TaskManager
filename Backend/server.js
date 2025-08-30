import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';

import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js';

const app = express();
const port = process.env.PORT;

// Middelware
app.use(cors({
    origin: process.env.FRONTEND_URL,
	methods: ["GET", "POST", "DELETE", "PUT"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// DB CONNECT
connectDB();

//Routes
app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

app.get ('/', (req, res) =>{
    res.send('API WORKING');
})

app.listen (port, () =>{
    console.log(`Server Started on http://localhost:${port}`);  
})
