const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const userRouters = require('./routers/userRouters');
const eventRouters = require('./routers/eventRouters');

require('dotenv').config();
const { PORT, MONGO_URI } = process.env;

// Json and Cors (http and header handlers)
app.use(express.json({extended: false}));
app.use(cors({
    origin: "*", // Allow requests from any origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    exposedHeaders: ["x-access-token"] // Expose specific headers (optional)
}));

// Handle preflight requests
app.options('*', cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Test route
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})


// Database and server listening
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`The Database was Connected Successfully\nThe Server was Listening\nhttp://localhost:${PORT}`);
        });
    })
    .catch((e) => console.log(e.message));

// Routers Middleware
app.use('/api', userRouters);
app.use('/api/event', eventRouters);
