import generateImage from '../Controller/imageController.js';
import express from 'express';
import userAuth from '../middleware/Auth.js';

const imageRouter = express.Router();
imageRouter.post('/generate',userAuth, generateImage);
export default imageRouter;