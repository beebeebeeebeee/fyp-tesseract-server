var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    cb(null, "./images/");
  },
  filename: function (_req, file, cb) {
    console.log(file)
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = multer({ storage: storage });
