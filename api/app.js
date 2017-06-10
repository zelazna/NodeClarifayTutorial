//content of api/app.js
const express = require('express')
const multer = require('multer')
const clarifay = require('./clarifay')
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`)
  }
})

const upload = multer({ storage })
const app = express()

app.post('/photos/upload', upload.array('photos'), function (req, res, next) {
  const message = { "data": [] }
  req.files.forEach(image => {
    fs.readFile(image.path, function (err, data) {
      // predict the contents of an image by passing in base 64 encoded file
      clarifay
        .analyse(new Buffer(data).toString('base64'))
        .then(
        response => {
          message.data.push({
            'image': {
              'path': image.path,
              'tags': serialize(response.outputs[0].data.concepts)
            }
          })
          // if every image has been proccessed send back the response
          if (message.data.length == req.files.length) {
            res.status(200).send(message)
          }
        },
        err => console.error(err)
        );
    });
  })
})

// get the tags from the Clarifay API
const serialize = (array) => {
  let subjects = [];
  array.forEach(function (element) {
    subjects.push(element.name)
  });
  // get only the best of 3 results
  return subjects.slice(0, 3)
}

module.exports = app
