const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: "dzcn9okeo",
  api_key: "451829261256218",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const cloudinaryUpload = async (req, res, next) => {
  try {
    const { files } = req;
    const videos = [];
    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {resource_type: "video"});
   
        
    
      videos.push(result.secure_url);

      fs.unlink(file.path, (err, data) => {
        if (err) {
          throw err
        }
      });
    }

    req.videos = videos;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  cloudinaryUpload,
  upload,
};
