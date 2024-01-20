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
    folder: "Cyberpump", // Change the folder name to a general one
    allowed_formats: ["jpg", "jpeg", "png", "mp4", "avi", "mov"], // Add both image and video formats
    resource_type: "auto", // Automatically determine the resource type
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const upload = multer({ storage });

module.exports = upload;
