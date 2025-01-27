import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Log MONGO URI to debug
console.log('MONGO URI:', process.env.MONGO);

// Check if MONGO URI is defined
if (!process.env.MONGO) {
  console.error('MONGO URI is undefined. Please check your .env file.');
  process.exit(1); // Exit the application if MONGO is undefined
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}!`);
});
