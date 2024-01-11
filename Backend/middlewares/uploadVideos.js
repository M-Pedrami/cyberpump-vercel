const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dzcn9okeo",
  api_key: "451829261256218",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "exercisevideos", // Change the folder name for videos
    allowed_formats: ["mp4", "avi", "mov"], // Add video formats here
    resource_type: "video", // Specify the resource type as video
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const upload = multer({ storage });

module.exports = upload;