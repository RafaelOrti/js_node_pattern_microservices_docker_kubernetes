// index.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3003;

mongoose.connect('mongodb://localhost:27017/userService', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
