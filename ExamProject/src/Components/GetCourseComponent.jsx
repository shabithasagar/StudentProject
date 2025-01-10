import React, { useEffect, useState } from 'react';

const GetCourseComponent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7083/GetCourse')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetCourseComponent;
