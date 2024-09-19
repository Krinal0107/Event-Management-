const express = require('express');
const { addEvent, getEvents, joinEvent, searchEvent } = require('../controllers/eventControllers');
const routers = express.Router();

routers.get('/', getEvents);
routers.post('/add-event', addEvent);
routers.post('/join/:id', joinEvent);
routers.get('/api/event', searchEvent)

module.exports = ("eventRouters", routers);