const express = require('express');
const uploadMiddleWare = require('../middleware/multer');

const router = express.Router();

router.post('/', uploadMiddleWare.single('photo'), (req, res, next) => {
  try {
    res.json({
      message: 'upload success',
      // data: req.
    })
  } catch (error) {
    res.json({
      message: 'error upload',
      messageServer: error
    })
  }
})

module.exports = router;