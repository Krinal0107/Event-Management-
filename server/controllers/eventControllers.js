const Event = require('../models/eventModels');

// Add Event Controller
const addEvent = async (req, res) => {
    try {
        const { title, desc, imglink, count, location, organizer, date } = req.body;

        // Create a new event using the create method
        const newEvent = await Event.create({
            title,
            desc,
            imglink,
            count,
            location,
            organizer,
            date
        });

        res.status(200).json({
            message: 'Event added successfully',
            event: newEvent
        });
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(400).json({
            message: 'Failed to add event',
            error: error.message
        });
    }
};

// Get Events Controller
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        res.status(200).json({
            message: 'Events retrieved successfully',
            events
        });
    } catch (error) {
        console.error('Error retrieving events:', error);
        res.status(500).json({
            message: 'Failed to retrieve events',
            error: error.message
        });
    }
};

// To join in an Event
const joinEvent = async (req, res) => {
    const eventId = req.params.id;
  
    try {
      const event = await Event.findById(eventId);

      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      if (event.count >= 1) {
        event.count -= 1;
        await event.save();
  
        return res.status(200).json({ message: 'Successfully joined the event', event });
      } else {
        return res.status(200).json({ message: 'Event is fully booked' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  };
  
// In routes/events.js or similar
const searchEvent = async (req, res) => {
  const { date, location, eventType } = req.query;

  // Example query logic
  let query = {};

  if (date) {
    query.date = date;
  }

  if (location) {
    query.location = location;
  }

  if (eventType) {
    query.eventType = eventType;
  }

  try {
    const events = await Event.find(query);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}


module.exports = { addEvent, getEvents, joinEvent, searchEvent }
