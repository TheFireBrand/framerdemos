import React, { useState, useEffect } from "react";
import axios from 'axios';

export function DemoViewer({ demoFile }) {
  const [demoData, setDemoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (demoFile) {
      axios.get(`/api/demos/${demoFile}`)
        .then(response => {
          setDemoData(response.data);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [demoFile]);

  if (isLoading) return <div>Loading demo...</div>;
  if (error) return <div>Error loading demo: {error}</div>;
  if (!demoData) return <div>No demo selected</div>;

  // Render your demo component here using demoData
  return (
    <div>
      <h2>{demoData.componentName}</h2>
      <p>Version: {demoData.versionNumber}</p>
      {/* Add more fields as needed */}
    </div>
  );
}