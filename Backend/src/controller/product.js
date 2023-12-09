const express = require('express')

const getAllProduct = (req, res, next) => {
  try {
    res.json({
      message: 'get all product success',
      data: null
    })
  } catch (error) {
    res.json({
      message: 'server error',
      serverMessage: error
    })
  }
}

module.exports = {
  getAllProduct
}