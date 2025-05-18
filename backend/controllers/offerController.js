const Offer = require('../models/Offer');
const Event = require('../models/Event');

const createOffer = async (req, res) => {
  const { title, description, price, date, eventId } = req.body;

  if (!title || !description || !price || !date || !eventId) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    const offer = new Offer({
      title,
      description,
      price,
      owner: req.user.id,
      date,
      eventId,
      photo: req.file ? req.file.filename : null,
    });

    await offer.save();
    res.json(offer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find().populate('owner', 'name email').populate('eventId', 'title');
    res.json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const updateOfferStatus = async (req, res) => {
  const { status } = req.body;

  if (!['approved', 'rejected', 'pending'].includes(status)) {
    return res.status(400).json({ msg: 'Invalid status' });
  }

  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) {
      return res.status(404).json({ msg: 'Offer not found' });
    }

    offer.status = status;
    await offer.save();
    res.json(offer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { createOffer, getOffers, updateOfferStatus };