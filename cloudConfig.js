const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

class CloudinaryStorage {
  constructor({ folder, allowedFormats }) {
    this.folder = folder;
    this.allowedFormats = allowedFormats;
  }

  _handleFile(req, file, callback) {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: this.folder,
        allowed_formats: this.allowedFormats,
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          return callback(error);
        }

        callback(null, {
          path: result.secure_url,
          filename: result.public_id,
          size: result.bytes,
        });
      },
    );

    file.stream.pipe(uploadStream);
  }

  _removeFile(req, file, callback) {
    cloudinary.uploader.destroy(file.filename, callback);
  }
}

const storage = new CloudinaryStorage({
  folder: "wanderstay_DEV",
  allowedFormats: ["png", "jpg", "jpeg"],
});

module.exports = {
  cloudinary,
  storage,
};
