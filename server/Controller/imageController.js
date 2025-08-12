import User from "../Models/UserModel.js"
import FormData from "form-data";
import axios from "axios";
  const generateImage = async (req, res) => {
  try {

    const { userId, prompt } = req.body;
    //find user
    const user = await User.findById(userId);
    if(!user) return res.status(201).json({ sucess: false, message: "unauthorized" });
    if (!prompt) {
      return res.json({
        success: false,
        message: " prompt is empty",
      });
    }
    //check if user has enough credits
    if (user.creditBalance <= 0) {
      return res.json({
        sucess: false,
        message: "You don't have enough credits to generate an image",
        creditBalance: user.credits,
      });
    }
    const formData = new FormData();
    formData.append("prompt", prompt);

    const {data}=await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{ headers: {
    'x-api-key': process.env.CLICK_BOARDAPI_KEY,
  },
   responseType:'arraybuffer' 
    })
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage=`data:image/png;base64,${base64Image}`;
    await User.findByIdAndUpdate(user._id,{
        creditBalance: user.creditBalance - 1,
    })
    return res.json({
        success: true,
        message: "Image generated successfully",
        image: resultImage,
        creditBalance: user.creditBalance - 1,
    })
  } catch (error) {
    console.log("Error generating image:", error);
    
    res.json({ success: false, message: error.message });
  }
};
export default generateImage;