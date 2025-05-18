const express = require('express');
const router = express.Router();
const { auth, restrictTo } = require('../middleware/auth');
const { createEvent, getEvents, getCalendarEvents, updateEventStatus, getInsights, getAvailableEvents } = require('../controllers/eventController');

// Create event (Organizer)
router.post('/create', auth, restrictTo('organizer'), createEvent);

// Get all events for organizer
router.get('/', auth, restrictTo('organizer'), getEvents);

// Get calendar events (Organizer)
router.get('/calendar', auth, restrictTo('organizer'), getCalendarEvents);

// Update event status (Organizer)
router.put('/:id', auth, restrictTo('organizer'), updateEventStatus);

// Get insights (Organizer)
router.get('/insights', auth, restrictTo('organizer'), getInsights);

// Get available events (Authenticated users, including artists)
router.get('/available', auth, getAvailableEvents);

module.exports = router;