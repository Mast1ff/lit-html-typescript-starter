'use strict';

const express = require('express');
const http = require('http');

const port = 8000;
// const black = '\u001b[30m';
// const red = '\u001b[31m';
const green = '\u001b[32m';
// const yellow = '\u001b[33m';
// const blue = '\u001b[34m';
// const magenta = '\u001b[35m';
// const cyan = '\u001b[36m';
// const white = '\u001b[37m';
// const reset = '\u001b[0m';

const app = express();
app.set('port', port);
app.use('/', express.static('public'));

// app.listen(port, () => { console.log(green + `Server listening on http://localhost:${port}, Ctrl + C to stop.`); });

const server = http.createServer(app);

server.listen(app.get('port'), () => { console.log(`${green}Server listening on port ${app.get('port')}`); });
