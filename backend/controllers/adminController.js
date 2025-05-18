const User = require('../models/User');
const Event = require('../models/Event');
const Offer = require('../models/Offer');

const getAdminInsights = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeEvents = await Event.countDocuments({ status: 'live' });
    const pendingOffers = await Offer.countDocuments({ status: 'pending' });
    const revenue = await Offer.aggregate([
      { $match: { status: 'approved' } },
      { $group: { _id: null, total: { $sum: '$price' } } },
    ]);

    res.json({
      totalUsers,
      activeEvents,
      pendingOffers,
      revenue: revenue[0]?.total || 0,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getAdminInsights };