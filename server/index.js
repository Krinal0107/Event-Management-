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
    origin: "https://event-management-dq2k.vercel.app", // Your frontend URL
    credentials: true, // Allow credentials such as cookies
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"] // Ensure correct headers are allowed
}));

// Handle preflight requests for all routes
app.options('*', cors({
    origin: "https://event-management-dq2k.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

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
