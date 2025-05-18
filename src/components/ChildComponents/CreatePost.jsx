import React, { useState, useEffect } from 'react';
import '../../styles/SideBar/CreatePost.css';

const CreatePost = ({ onPostCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    date: '',
    eventId: '',
    image: null,
  });
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch events for the dropdown
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Please log in to create an offer.');
          return;
        }

        const response = await fetch('http://localhost:5000/api/event/available', {
          headers: {
            'x-auth-token': token,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 403) {
            throw new Error('You are not authorized to view events. Please contact support.');
          }
          throw new Error(errorData.msg || 'Failed to fetch events');
        }

        const data = await response.json();
        // Sort events by date for better UX
        setEvents(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Please upload a JPEG or PNG image');
      return;
    }
    if (file && file.size > 1 * 1024 * 1024) {
      setError('Image size must be less than 1MB');
      return;
    }
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please log in to create an offer.');
      setLoading(false);
      return;
    }

    // Validate required fields
    if (!formData.title || !formData.description || !formData.price || !formData.date || !formData.eventId) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Create FormData for multipart/form-data request
    const postData = new FormData();
    postData.append('title', formData.title);
    postData.append('description', formData.description);
    postData.append('price', formData.price);
    postData.append('date', formData.date);
    postData.append('eventId', formData.eventId);
    if (formData.image) {
      postData.append('photo', formData.image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/offer/create', {
        method: 'POST',
        headers: {
          'x-auth-token': token,
        },
        body: postData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to create offer');
      }

      const newOffer = await response.json();
      // Only call onPostCreate if it’s a function
      if (typeof onPostCreate === 'function') {
        onPostCreate(newOffer);
      } else {
        console.warn('onPostCreate is not a function, skipping callback');
      }
      setFormData({
        title: '',
        description: '',
        price: '',
        date: '',
        eventId: '',
        image: null,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post-container">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <h2>Create New Offer Post</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          name="title"
          placeholder="Offer Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price (Rs)"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <select name="eventId" value={formData.eventId} onChange={handleChange} required>
          <option value="">Select an Event</option>
          {events.length === 0 ? (
            <option value="" disabled>
              No events available
            </option>
          ) : (
            events.map((event) => (
              <option key={event._id} value={event._id}>
                {event.title} ({new Date(event.date).toLocaleDateString()})
              </option>
            ))
          )}
        </select>

        <input
          type="file"
          name="image"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;