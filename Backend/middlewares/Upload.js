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
    folder: "Cyberpump",
    allowed_formats: ["jpg", "jpeg", "png", "mp4"], // Add video formats
    resource_type: "auto",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const upload = multer({ storage });

const handleUpload = upload.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'video', maxCount: 10 },
]);

module.exports = handleUpload;
