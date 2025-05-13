import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AssetsList.css';

export default function AssetsList() {
  const [assets, setAssets] = useState([]);

  const fetchAssets = async () => {
    const res = await axios.get('https://assestlist-server.vercel.app/api/assets');
    setAssets(res.data);
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    

    await axios.post('https://assestlist-server.vercel.app/api/assets/upload', formData);
    fetchAssets();
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const totalValue = assets.reduce((sum, a) => {
    const numericValue = typeof a.value === 'string'
      ? parseFloat(a.value.replace(/,/g, ''))
      : a.value;
    return sum + (numericValue || 0);
  }, 0);

  return (
    <div className="assets-container">
      <h2 className="assets-title">📊 Assets Dashboard</h2>

      <input type="file" accept=".csv" onChange={handleUpload} className="file-upload" />

      <div className="assets-cards">
        <div className="asset-card">💼 Total Assets<br /><span>{assets.length}</span></div>
        <div className="asset-card">💰 Total Value<br /><span>$ {totalValue.toLocaleString()}</span></div>
      </div>

      <div className="assets-table-wrapper">
        <table className="assets-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Name</th>
              <th>Value</th>
              <th>Fraction</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a, i) => (
              <tr key={i}>
                <td>{a.platform}</td>
                <td>{a.name}</td>
                <td>{a.value}</td>
                <td>{a.fractionValue}</td>
                <td>{a.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
