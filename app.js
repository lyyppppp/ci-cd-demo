const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.json({ message: 'HALLO from CI/CD!' });
});

app.get('/health',(req,res) => {
  res.json({ status: 'healthy' });
});

module.exports = app;
