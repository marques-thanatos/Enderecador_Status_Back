//const express = require('express');

const app = require('./src/config/custom-express');
const PORT = 3002;

app.listen(PORT, function() {
  console.log(`Server is running on http://localhost:${PORT}`);
});