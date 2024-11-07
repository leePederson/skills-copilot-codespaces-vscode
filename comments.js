//create web server
const express = require('express');
const app = express();
const port = 3000;

//parse the request body
app.use(express.json());

//store the comments
const comments = [];

//GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

//start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});