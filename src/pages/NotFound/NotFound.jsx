import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className="note-found-container">
      <div className="path">
        <p>Home</p>
        <span>/</span>
        <p>404 Error</p>
      </div>

      <div className='note-found-wrapper'>
        <p className="notfound-title">404 Not Found</p>
        <p className="notfound-text">Your visited page not found. You may go home page.</p>
        <button onClick={() => nav('/home')}>Back to home page</button>
      </div>
    </div>
  );
};

export default NotFound;
