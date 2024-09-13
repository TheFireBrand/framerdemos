import React, { useState } from "react";
import axios from 'axios';
// ... other imports ...

export default function Component() {
  // ... existing state and handlers ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanedImportLink = formData.importLink.split('@')[0];
    const jsonData = {
      ...formData,
      importLink: cleanedImportLink,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await axios.post('/api/submit-form', jsonData);
      if (response.data.success) {
        console.log("Form data saved:", response.data.fileName);
        // You can add user feedback here (e.g., a success message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add user feedback for errors here
    }
  };

  // ... rest of the component ...
}