const http = require('http')
const PORT = process.env.PORT || 3000

reqCnt = 1

http.createServer((req, res) => {

    const message = `Request Count: ${reqCnt}`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><head></head><body>Hello World! <br>${message}</body></html>`);

    console.log("handled request: " + reqCnt++);

}).listen(PORT, (err) => {
    if (err) {
        throw err
    }
    console.log('server is listening at', PORT )
})