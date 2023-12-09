const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    const timeStamp = new Date().getTime();
    const fileName = file.originalname;

    cb(null, `${timeStamp}-${fileName}`)
  },
});

const uploadMiddleWare = multer({
  storage: storage,
  limits: {
    // fieldNameSize?: number | undefined,
    // fieldSize?: number | undefined,
    // fields?: number | undefined,
    fileSize: 3 * 1000 * 1000, // 3MB
    // files?: number | undefined,
    // parts?: number | undefined,
    // headerPairs?: number | undefined
  },
  
});

module.exports = uploadMiddleWare;
