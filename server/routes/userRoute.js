import express from 'express';
import {registerUser,loginUser,userCredit} from '../Controller/userController.js';
import Auth from '../middleware/Auth.js';
const userRouter=express.Router();  
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credit',Auth, userCredit);
export default userRouter;
