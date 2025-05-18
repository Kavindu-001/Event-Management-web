const express = require('express');
const router = express.Router();
const { auth, restrictTo } = require('../middleware/auth');
const { getAdminInsights } = require('../controllers/adminController');

// Get admin insights
router.get('/insights', auth, restrictTo('admin'), getAdminInsights);

module.exports = router;