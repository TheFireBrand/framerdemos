import React, { useState } from "react";
import axios from 'axios';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Component() {
  const [formData, setFormData] = useState({
    baseDomain: "",
    importLink: "",
    componentName: "",
    versionNumber: "",
    documentationLink: "",
    authorName: "",
    checkoutLink: "",
    notificationMessage: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

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
        alert("Demo created successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add user feedback for errors here
      alert("Error creating demo. Please try again.");
    }
  };

  return (
    <Card className="max-w-2xl mx-auto w-full">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Framer Component Demo Information</CardTitle>
          <CardDescription>Enter the details for creating a demo of your Framer component.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="baseDomain">Base Domain (Staging URL)</Label>
            <Input id="baseDomain" placeholder="Enter the staging URL" value={formData.baseDomain} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="importLink">Component Import Link</Label>
            <Input id="importLink" placeholder="Enter the import link" value={formData.importLink} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="componentName">Component Name</Label>
            <Input id="componentName" placeholder="Enter the component name" value={formData.componentName} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="versionNumber">Version Number</Label>
            <Input id="versionNumber" placeholder="Enter the version number" value={formData.versionNumber} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="documentationLink">Documentation Link</Label>
            <Input id="documentationLink" placeholder="Enter the documentation link" value={formData.documentationLink} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="authorName">Author Name</Label>
            <Input id="authorName" placeholder="Enter the author's name" value={formData.authorName} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkoutLink">Checkout Link</Label>
            <Input id="checkoutLink" placeholder="Enter the checkout link" value={formData.checkoutLink} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notificationMessage">Notification Popup Message</Label>
            <Textarea id="notificationMessage" placeholder="Enter the notification message" value={formData.notificationMessage} onChange={handleInputChange} maxLength={150} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">Create Demo</Button>
        </CardFooter>
      </form>
    </Card>
  );
}