const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const cors = require('cors');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser');

// Route files
const shoes = require('./routes/shoes');
const auth = require('./routes/auth');

// env vars
dotenv.config({ path: './config/config.env' });

// connect to DB
connectDB();

const app = express();
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/shoes', shoes);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});