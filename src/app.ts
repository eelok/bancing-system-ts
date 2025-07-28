import express from 'express';
import { router as accountRoutes } from './route/AccountRoute';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3050;
const CLIENT_REACT_URL = process.env.CLIENT_REACT_URL || 'http://localhost:3050';

const corsOptions = {
    origin: CLIENT_REACT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/v1/accounts', accountRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});