const express = require('express');

const app = express();
app.get('/api',function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
	const liczba1 = req.query.liczba1
	const liczba2 = req.query.liczba2
    res.send({"liczba1": liczba1});
}).listen(process.env.PORT || 3000);