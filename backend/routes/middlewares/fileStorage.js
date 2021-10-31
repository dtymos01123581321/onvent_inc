const multer = require("multer");
const fs = require("fs");
const path = require("path");

const { UPLOAD_DIR } = require("../../utilities/constants");

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    cb(null , file.originalname);
  }
});

const MAX_FILE_SIZE = 2 * 1024 * 1024;

function fileFilter (req, file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;

  const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Wrong image format. Please upload only these format of files "jpeg|jpg|png|gif"!');
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: MAX_FILE_SIZE
  },
  fileFilter
});

module.exports = upload;
