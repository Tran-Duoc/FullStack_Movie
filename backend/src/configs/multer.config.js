const multer = require("multer");

//! Tạo kho lưu trữ image
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./src/public/images");
  },
  //? "file.originalname" tên image sao khi được lưu về máy
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
