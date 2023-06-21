const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log(res)
    res.setHeader('Content-Type', 'text/html')

    if (req.url == '/') {
        res.statusCode = 200
        res.end('<h1>Website module</h1>')
    } else if (req.url == '/hello') {
        res.statusCode = 200
        const data = fs.readFileSync("index.html")
        res.end(data.toString())
    } else {
        res.statusCode = 404
        res.end("<h1>Not found</h1>")
    }
})

server.listen(port, () => {
    console.log("listening server", port);
})