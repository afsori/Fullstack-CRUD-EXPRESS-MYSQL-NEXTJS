const express =  require("express");
const users = require("./users");
const upload = require("./upload");
const product = require('./product')

const router = express.Router();

router.use('/users', users);

router.use('/product', product);

router.use('/upload', upload)

module.exports = router;