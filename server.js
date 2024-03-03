const http = require("http");

const requestHandler = require("./routes.js");

const port = 4000;

const server = http.createServer(requestHandler);

server.listen(port, function() {
    console.log(`✅Server is running on port:${port}`);
});
