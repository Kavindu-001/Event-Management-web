const Event = require('../models/Event');
const Offer = require('../models/Offer');

const createEvent = async (req, res) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const event = new Event({
      title,
      description,
      date,
      organizer: req.user.id,
    });

    await event.save();
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizer: req.user.id });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getCalendarEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizer: req.user.id }).select('title date status');
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const updateEventStatus = async (req, res) => {
  const { status } = req.body;

  if (!['live', 'end', 'cancel'].includes(status)) {
    return res.status(400).json({ msg: 'Invalid status' });
  }

  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    if (event.organizer.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    event.status = status;
    await event.save();
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getInsights = async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments({ organizer: req.user.id });
    const offers = await Offer.countDocuments({ eventId: { $in: await Event.find({ organizer: req.user.id }).select('_id') } });
    res.json({ totalEvents, totalOffers: offers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};



// Get available events for artists
const getAvailableEvents = async (req, res) => {
  try {
    // Fetch events that are live or pending, regardless of organizer
    const events = await Event.find({ status: { $in: ['live', 'pending'] } });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { createEvent, getEvents, getCalendarEvents, updateEventStatus, getInsights, getAvailableEvents };