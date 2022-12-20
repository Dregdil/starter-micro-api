var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
	const urlParams = new URLSearchParams(queryString);
	
    res.write(urlParams.get("liczba1"));
    res.end();
}).listen(process.env.PORT || 3000);