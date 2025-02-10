// Create web server
const express = require('express');
const app = express();
const port = 3000;

// create route
app.get('/comments', (req, res) => {
  res.send('This is a comment');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});