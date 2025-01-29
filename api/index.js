import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// Ensure MONGO_URI is properly loaded
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ Error: MONGO_URI is missing in .env file");
  process.exit(1); // Stop the server if no DB URI is found
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); // Stop the server if connection fails
  });

const PORT = process.env.PORT || 5000; // Use .env port or default to 5000

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}!`);
});



app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
