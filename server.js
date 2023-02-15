var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
const PORT = process.env.PORT || 3001;
app.use(cookieParser())
app.get('/api', (req,res) => {
  console.log(`Cookie: ${req.cookies['SESSION']}`)
  res.send("<html><head></head><body><p>Cookie: " + req.cookies['SESSION'] + "</p></body></html>")
})
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})