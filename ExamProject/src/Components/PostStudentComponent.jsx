import React, { useState } from 'react';

const PostStudentComponent = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://localhost:7083/register?Name=${encodeURIComponent(user.name)}&Email=${encodeURIComponent(user.email)}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Change to .text() to handle plain text responses
      })
      .then(data => {
        setResponseMessage('User registered successfully!'); // Set the success message
        console.log(data);
      })
      .catch(error => {
        console.error('Error registering user:', error);
        setResponseMessage('Failed to register user. Please try again.');
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Register Student</h1>
      {responseMessage && <p style={{ color: responseMessage.includes('successfully') ? 'green' : 'red' }}>{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={user.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={user.email} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PostStudentComponent;
