require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');

const app = express();

const routerAllApp = require("./routes/index");
const {logRequest} = require('./middleware/logs');

// middleware running
// middleware can be use for checking token, validation some form, etc
app.use(logRequest)

// allow data json
app.use(express.json());

// middleware for show static file
app.use('/assets',express.static('public/images'))

// routing default application
app.use("/", routerAllApp);

// handling errors for application
app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

// running port
app.listen(PORT, () => {
  console.log(`server berhasil dijalankan di port ${PORT}`)
});

module.exports = app;