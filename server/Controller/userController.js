import UserModel from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
 
  try {
     const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ sucess: false, message: "Please fill all the fields" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    const newuser = new UserModel(userData);
    await newuser.save();

    const token = jwt.sign({ userId: newuser._id }, process.env.JWT_SECRET);
    res.status(201).json({ sucess: true, token, user: { name: newuser.name } });
  } catch (error) {
    console.log(error);
    res.status(401).json({ sucess: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const {email,password} = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ sucess: false, message: "Please fill all the fields" });
    }
    const user = await UserModel.findOne({email:email});
    if (!user) return res.status(201).json({ sucess: false, message: "unauthorized" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(201)
        .json({ sucess: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ sucess: true, token, user: { name: user.name } });
  } catch (error) {
    console.log(error);
    res.status(404).json({ sucess: false, message: error.message });
  }
};
export const userCredit=async(req,res)=>{
  try {
     const {userId}=req.body;
     const user=await UserModel.findById(userId);
     res.status(200).json({sucess:true,creditBalance:user.creditBalance,user:{name:user.name}});


  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: error.message });
    
  }
}


