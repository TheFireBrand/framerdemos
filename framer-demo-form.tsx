import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function Component() {
  return (
    <Card className="max-w-2xl mx-auto w-full">
      <CardHeader>
        <CardTitle>Framer Component Demo Information</CardTitle>
        <CardDescription>Enter the details for creating a demo of your Framer component.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="baseDomain">Base Domain (Staging URL)</Label>
          <Input id="baseDomain" placeholder="Enter the staging URL" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="importLink">Component Import Link</Label>
          <Input id="importLink" placeholder="Enter the import link" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="componentName">Component Name</Label>
          <Input id="componentName" placeholder="Enter the component name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="versionNumber">Version Number</Label>
          <Input id="versionNumber" placeholder="Enter the version number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="documentationLink">Documentation Link</Label>
          <Input id="documentationLink" placeholder="Enter the documentation link" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="authorName">Author Name</Label>
          <Input id="authorName" placeholder="Enter the author's name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="checkoutLink">Checkout Link</Label>
          <Input id="checkoutLink" placeholder="Enter the checkout link" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="notificationMessage">Notification Popup Message</Label>
          <Input id="notificationMessage" placeholder="Enter the notification message" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Demo</Button>
      </CardFooter>
    </Card>
  )
}


