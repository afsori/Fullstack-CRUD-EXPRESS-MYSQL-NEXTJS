const { reqFormRes } = require("../middleware/formRes")
const userModel = require("../models/users");

const getAllUsers = async (req, res, next) => {
  try {
    const [data] = await userModel.getAllUsers()
    console.log('data', data)
    res.json({
      message: 'success get data',
      data: data
    })
  } catch (error) {
    res.json({
      message: 'server error',
      serverMessage: error
    })    
  }
}

const createNewUsers = async (req, res, next) => {
  //  const data = reqFormRes(res, )
  
  const {body} = req;
  console.log('req body', body)

  if(!body.name || !body.email || !body.address) {
    return res.status(400).json({
      message: 'silahkan lengkapi data inputan',
      data: null
    });
  };
  try {
    const resultBody = await userModel.createUsers(body)
    res.status(201).json({
      message: 'insert data success',
      data: body
    })
  } catch (error) {
    res.json({
      message: 'server error',
      serverMessage: error
    })
  }
}

const updateUsers = async (req, res, next) => {
  console.log('req params', req.params, req.body)
 const {idUser} = req.params;
 const bodyData = req.body;

 try {
  await userModel.updateUsers(req.body, idUser)
   res.json({
     message: 'UPDATE users success',
     data: {
      bodyData,
      idUser
     },
   })
  } catch (error) {
    res.json({
      message: 'server error',
      serverMessage: error
    })
 }
}

const deleteUsers = async (req, res, next) => {
  console.log('req params', req.params, req.body)
  const {idUser} = req.params;
  try {
    await userModel.deleteUsers(idUser)
    res.json({
       message: 'delete users success',
       params: idUser
    })
  } catch (error) {
    res.json({
       message: 'server connection failed',
       serverMessage: error
    })
  }
}

module.exports = {
  getAllUsers, 
  createNewUsers,
  updateUsers,
  deleteUsers
}