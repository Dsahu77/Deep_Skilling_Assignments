import React from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import './App.css';

function App() {
  const showAll = true; 

  return (
    <div className="app-container">
      {showAll && (
        <>
          <div className="column">
            <CourseDetails />
          </div>
          <div className="column">
            <BookDetails />
          </div>
          <div className="column">
            <BlogDetails />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

