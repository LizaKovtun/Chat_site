const http = require('http');
const fs = require('fs');
const path = require ('path');
const pathToIndex = path.join(__dirname, 'static', 'chat.html');
const pathToStyle = path.join(__dirname, 'static', 'chat.css');
const pathToScript = path.join(__dirname, 'static', 'script.js');

const indexHtmlFile = fs.readFileSync(pathToIndex);
const indexCssFile = fs.readFileSync(pathToStyle);
const indexJsFile = fs.readFileSync(pathToScript);
const server = http.createServer((req, res) => {
	if (req.url == '/') {
		return res.end(indexHtmlFile);
	}
	if (req.url == '/chat.css') {
		return res.end(indexCssFile);
	}
	if (req.url == '/script.js') {
		return res.end(indexJsFile);
	}
	res.statusCode = 404;
	return res.end('Error 404');
})
server.listen(1122)