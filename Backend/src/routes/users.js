const express = require("express");
const { getAllUsers, createNewUsers, updateUsers, deleteUsers } = require("../controller/users");

const router = express.Router();

// read data
router.get("/", getAllUsers)

// create users
router.post('/', createNewUsers)

// update data
router.put('/:idUser', updateUsers)

// delete data
router.delete('/:idUser', deleteUsers)

module.exports = router;