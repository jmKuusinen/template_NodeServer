const http = require('http') // import http library
const port = 3000 // Define port
const fs = require('fs')

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            response.writeHead(404)
            response.write('Error:  File not found!')
        } else {
            response.write(data)
        }
        response.end()
    })

})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port: ' + port)
    }
})