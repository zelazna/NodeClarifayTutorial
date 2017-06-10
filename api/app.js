//content of api/app.js
const express = require('express')
var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`)
  }
})

var upload = multer({ storage })

const app = express()

app.post('/photos/upload', upload.array('photos'), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  // TODO: photos handling
})

module.exports = app
