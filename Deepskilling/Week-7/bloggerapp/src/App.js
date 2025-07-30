import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './components/data';

function App() {
  const [showCourse, setShowCourse] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);

  // Method 3: Conditional rendering using if-else
  const renderCourse = () => {
    if (showCourse) {
      return (
        <div
          style={{
            flex: 1,
            padding: '10px',
            borderRight: showBook || showBlog ? '3px solid green' : 'none'
          }}
        >
          <CourseDetails courses={courses} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📘 Blogger App</h1>

      {/* Toggle Buttons */}
      <div style={{ marginBottom: '20px' }}>
        {/* Method 2: Conditional button text with ternary */}
        <button onClick={() => setShowCourse(!showCourse)}>
          {showCourse ? 'Hide' : 'Show'} Course Details
        </button>&nbsp;
        <button onClick={() => setShowBook(!showBook)}>
          {showBook ? 'Hide' : 'Show'} Book Details
        </button>&nbsp;
        <button onClick={() => setShowBlog(!showBlog)}>
          {showBlog ? 'Hide' : 'Show'} Blog Details
        </button>
      </div>

      {/* Flex Layout with Green Dividers */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '10px' }}>
        {/* Method 3: if-else function */}
        {renderCourse()}

        {/* Method 1: Short-circuit && */}
        {showBook && (
          <div
            style={{
              flex: 1,
              padding: '10px',
              borderRight: showBlog ? '3px solid green' : 'none'
            }}
          >
            <BookDetails books={books} />
          </div>
        )}

        {/* Method 1: Short-circuit && again */}
        {showBlog && (
          <div style={{ flex: 1, padding: '10px' }}>
            <BlogDetails blogs={blogs} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;