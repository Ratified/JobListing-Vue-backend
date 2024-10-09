import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { jobRoutes } from './routes/jobs.route';

const app = express();
const port = 8080;

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use job routes
app.use('/api/jobs', jobRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://George:n7iQtpHpEPygGr6A@backenddb.bwofx.mongodb.net/jobs?retryWrites=true&w=majority&tls=true')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});