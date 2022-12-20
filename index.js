const express = require('express');
function add(a,b) {
  return a+b;
}
const app = express();
app.get('/api',function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
	const liczba1 = req.query.liczba1
	const liczba2 = req.query.liczba2
	var data = add(parseInt(liczba1), parseInt(liczba2))
    res.send({'Wynik dodawania: ${liczba1} + ${liczba2} = ':data});
}).listen(process.env.PORT || 3000);