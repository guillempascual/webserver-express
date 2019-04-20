const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        //res.write('Hello, World');

        let output = {
            name: 'guillem',
            age: '52',
            url: req.url,
        }
        res.write(JSON.stringify(output));
        res.end();
    })
    .listen(8080);

console.log("Listening on port 8080");