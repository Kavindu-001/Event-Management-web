const express = require('express');
const router = express.Router();
const { auth, restrictTo } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  createOffer,
  getOffers,
  updateOfferStatus,
} = require('../controllers/offerController');

// Create offer (Artist)
router.post('/create', auth, restrictTo('artist'), upload, createOffer);

// Get all offers — now available to both organizers AND artists
router.get('/', auth, restrictTo('organizer', 'artist'), getOffers);

// Update offer status — still only organizers
router.put('/:id', auth, restrictTo('organizer'), updateOfferStatus);

module.exports = router;
