const express = require('express');
const app = express();
const users = require('users-db.json');

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
