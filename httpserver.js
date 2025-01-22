const http = require('http')

const port = process.env.Port || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'tesxt/html')
    res.end('<h1> This is Haroon</h1> <p> Hello World!</p>')
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})