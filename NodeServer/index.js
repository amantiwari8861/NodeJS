let http = require("http");

const PORT = 8080, HOST = "localhost";
let retrying=false;
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World! by Node Server',
    }));
});
server.listen(PORT,HOST,() => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE' && !retrying) {
        console.error('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(PORT, HOST,() => {
                console.log(`Server is listening on http://${HOST}:${PORT}`);
                retrying=true;
            });
        }, 3000);
    }
    else
    {
        console.log("Server error:",e.code);
    }
});