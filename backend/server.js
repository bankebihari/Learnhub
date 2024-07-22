import app from "./app.js";
import { v2 as cloudinary } from 'cloudinary';
import Razorpay from "razorpay";
import { config } from 'dotenv';

config(); // Ensure environment variables are loaded

const PORT = process.env.PORT || 3000; // Default to port 3000 if not set

// cloudinary configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
