import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AssetsList from './AssetsList';
import AssetsAI from './AssetsAI';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  if (!user) {
    navigate('/');
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <Routes>
          <Route path="assets" element={<AssetsList />} />
          <Route path="assets-ai" element={<AssetsAI />} />
        </Routes>
      </div>
    </div>
  );
}
