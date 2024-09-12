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


// Data captured on this page will be used to populate variable text replacements in the rogueLicenseTemplate.tsx
// baseDomain should only accept *.framer.app urls
// "authorName" should be added to a comment at the top, followed by "documentationLink" commented in the next line, then "componentName" and "versionNumber"
// The format to expect in this field will be the copied import link of Framer components and appear as follows:
// import LicesingAutomation_Igor from "https://framer.com/m/LicesingAutomation-Igor-7gBC.js@ks25j8Cwjov7ukP1q1ko"
// The entire import link will be added to the demo file which is based on rogueLicenseTemplate.tsx, with relative content replacements being applied.
// The component specified in the pasted import link should replace ${importedComponentName}

// "notificationMessage" should be a textarea with a character limit of 150.
// "checkoutLink" should ALSO be added to the last propertyControl description field, if possible, so users can click through to the checkout page for each component.

// The "Create Demo" button should initiate the text replacement and save the resulting tsx component demo in the ./demos directory.
// The "componentName" can be used as a prefix along with a numeric timestamp (DDMMYYYYHHMMSS) to ensure each demo file is unique: componentName_12092024174325.tsx
// The information contained in the filename will be used to inform the viewer component about the source it should load.
// The filename should be split and an import link, using the same format as the one pasted into the baseDomain field, should be created,so "componentName_12092024174325" would become:
// import componentName from "https://componentName_12092024174325"



// I will need a viewer component that will be based in Framer, but made available to users along with their demo import code.
// This viewer component will require the following features:
//