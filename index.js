var http = require('http');
const url = require('url');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
	const liczba1 = req.query.liczba1
    res.send(liczba1);
    res.end();
}).listen(process.env.PORT || 3000);