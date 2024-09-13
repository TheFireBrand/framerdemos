import React, { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea" // We'll need to create this component

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
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Remove the '@' suffix from the import link
    const cleanedImportLink = formData.importLink.split('@')[0]
    const jsonData = {
      ...formData,
      importLink: cleanedImportLink,
      timestamp: new Date().toISOString()
    }
    console.log("Form data:", jsonData)
    // Here you would typically send this data to a server or save it
    // For now, we'll just log it to the console
  }

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
  )
}


