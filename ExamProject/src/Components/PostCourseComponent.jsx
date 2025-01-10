import React, { useState } from 'react';

const PostCourseComponent = () => {
  const [course, setCourse] = useState({
    title: '',
    description: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://localhost:7083/registerCourse?Title=${encodeURIComponent(course.title)}&Description=${encodeURIComponent(course.description)}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Change to .text() to handle plain text responses
      })
      .then(data => {
        setResponseMessage('Course registered successfully!'); // Set the success message
        console.log(data);
      })
      .catch(error => {
        console.error('Error registering course:', error);
        setResponseMessage('Failed to register course. Please try again.');
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Register Course</h1>
      {responseMessage && <p style={{ color: responseMessage.includes('successfully') ? 'green' : 'red' }}>{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={course.title} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={course.description} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PostCourseComponent;
