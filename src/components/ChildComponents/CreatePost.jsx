import React, { useState } from 'react';
import '../../styles/SideBar/CreatePost.css'; // Adjust the path as necessary

const CreatePost = ({ onPostCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    owner: '',
    image: null, // Store the uploaded file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({ ...formData, image: file }); // Update the image field with the file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const postData = new FormData();
    postData.append('title', formData.title);
    postData.append('description', formData.description);
    postData.append('price', formData.price);
    postData.append('owner', formData.owner);
    postData.append('image', formData.image); // Append the file

    onPostCreate(postData); // Send the FormData object to the parent
    setFormData({ title: '', description: '', price: '', owner: '', image: null });
  };


  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <h2>Create New Offer Post</h2>

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
        type="text"
        name="owner"
        placeholder="Owner Name"
        value={formData.owner}
        onChange={handleChange}
        required
      />

      {/* File Upload Input */}
      <input
        type="file"
        name="image"
        accept="image/*" // Restrict to image files only
        onChange={handleFileChange}
        required
      />

      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost; 