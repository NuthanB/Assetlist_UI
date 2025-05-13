import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Add this line to import the styles

export default function Sidebar() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3 className="sidebar-title">🚀 Assets App</h3>
        <Link to="/dashboard/assets" className="sidebar-link">📄 Assets List</Link>
        <Link to="/dashboard/assets-ai" className="sidebar-link">🤖 Assets AI</Link>
      </div>
      <div className="sidebar-bottom">
        <p className="sidebar-user">👤 {user}</p>
        <button className="sidebar-logout" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
