import jwt from "jsonwebtoken";

const userAuth=async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if(!token) {
        
        
        return res.status(401).json({success:false,message:"Unauthorized, No token provided"});
    }
    try {
        const decoded=jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.userId) {
            if(!req.body) req.body = {};
            req.body.userId=decoded.userId;
           
        }else{
            return res.status(401).json({success:false,message:"Unauthorized, Invalid token"});
        }
         next();

    } catch (error) {
        console.error(" Token verification failed:", error);
        return res.status(401).json({success:false,message:error.message});
    }
}
export default userAuth;