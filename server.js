var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser())
app.get('/api', (req,res) => {
  console.log(`Cookie: ${req.cookies['SESSION']}`)
  res.send("<html><head></head><body><p>Cookie: " + req.cookies['SESSION'] + "</p></body></html>")
})
app.listen(3000, () => {
  console.log("App listening on port 3000")
})