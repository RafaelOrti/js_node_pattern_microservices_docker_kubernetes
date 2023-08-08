// order-service/src/index.js
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

mongoose.connect('mongodb://localhost:27017/orderService', {
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

app.use('/order', orderRoutes);

app.listen(PORT, () => {
  console.log(`Order service is running on port ${PORT}`);
});
