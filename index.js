const server = require('./server.js');

const port = 5350;

server.listen(port, () => console.log(`server listening on ${port}`));