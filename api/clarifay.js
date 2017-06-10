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
    'VBnMOmN6f2PLzIQGHdc9Dk_dcRSxXMdsvxGoageF',
    '2vY4Nnbuts_HhfWoROt757rRJG3c--zsHvOfNnuK'
)