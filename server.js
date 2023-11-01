const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to DB
connectDB();

// Route Files
const bootcamps = require('./routes/bootcamps');

const app = express();

app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handle unhandled promise rejections
process.on('unhandled rejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close Server and Exit process
    server.close(() => process.exit(1));
});