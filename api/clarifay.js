// content of api/clarifay.js
var Clarifai = require('clarifai');

// extends the Clarifai.App
class ImageProcessing extends Clarifai.App {
    constructor(clientId, clientSecret) {
        super(clientId, clientSecret);
    }
    analyse(base64data) {
        return this.models.predict(Clarifai.GENERAL_MODEL, base64data)
    }
}

// instantiate a new Clarifai app passing in your clientId and clientSecret
module.exports = new ImageProcessing(
    'clientId',
    'clientSecret'
)