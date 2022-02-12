const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const port = 3000

// let key = fs.readFileSync(__dirname + '/selfsigned.key')
// let cert = fs.readFileSync(__dirname + '/selfsigned.crt')
// let options = {
//     key: key,
//     cert: cert
// };

app = express()
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

let server = http.createServer(app)
// let server = https.createServer(options, app)





server.listen(port, () => {
    console.log('server start on port: ' + port)
})