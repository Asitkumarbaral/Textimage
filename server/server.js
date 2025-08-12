import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';
import path from 'path';  
const PORT=process.env.PORT || 4000;
const app = express();



const __dirname = path.resolve();
app.use(express.json());
app.use(cors());
await connectDB()
app.use('/api/user', userRouter); 
app.use('/api/image',imageRouter);
app.use(express.static(path.join(__dirname, '/client/dist'))); // Serve static files from the uploads directory
app.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


