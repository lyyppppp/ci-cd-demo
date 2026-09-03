const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.josn({ message: 'HALLO from CI/CD!' });
});

app.get('/health',(req,res) => {
  res.josn{ status: 'healthy' });
});

module.exports = app;
