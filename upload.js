const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // optional: folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'webp'], // allowed file formats
  }
});

const upload = multer({ storage });

module.exports = upload;

