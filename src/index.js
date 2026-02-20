const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Main route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Junior Developer API Test' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
