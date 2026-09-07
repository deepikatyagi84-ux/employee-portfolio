const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Employee Portfolio Backend is Running - Developer 2");
});

server.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});