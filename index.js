//content of index.js
const http = require('http')
const port = 3000
const app = require('./api/app')

const server = http.createServer(app)

// bind the server on port
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
