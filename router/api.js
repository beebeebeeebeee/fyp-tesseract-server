const express = require("express");
const router = express.Router();
const Tesseract = require("tesseract.js");
var fs = require("fs");

/////////////////////////////////
//file uploader
/////////////////////////////////
const createFolder = require("./function/createFolder");
createFolder("./images/");

var upload = require("./function/uploadMulter");
/////////////////////////////////
//end of file uploader
/////////////////////////////////

router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) {
    res
      .status(400)
      .send({ error: "please ensure that the image is on `file` column." });
    return;
  }
  console.log(req.file.path);
  data = await Tesseract.recognize(req.file.path, "eng", {});
  fs.unlinkSync(req.file.path);
  console.log(data.data.text);
  res.status(200).send({ text: data.data.text });
});

module.exports = router;
