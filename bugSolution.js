const express = require('express');
const app = express();
app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;
  try {
    // Validation and/or database lookup here
    // If an error occurs, throw it to the next middleware
    if (isNaN(userId) || userId <= 0) {
      throw new Error('Invalid user ID');
    }
    // ... your database or other logic to fetch the user
    // ...
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));