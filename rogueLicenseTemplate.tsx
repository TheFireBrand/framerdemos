// ${authorName}
// ${documentationLink}
// ${componentName} ${versionNumber}

import { Frame, addPropertyControls, ControlType } from "framer"
import React, { useEffect, useState } from "react"
// The actual import statement will be placed here

const copyPropertyControls = (sourceComponent, targetComponent) => {
    if (sourceComponent.propertyControls) {
        addPropertyControls(targetComponent, sourceComponent.propertyControls)
    }
}

// {$baseDomain} should be added to the below approved list
const encodedDomains =
    "LmZyYW1lci5hcHA=.LmZyYW1lcnVzZXJjb250ZW50LmNvbQ==.LmZyYW1lcmNhbnZhcy5jb20="
const decodeBase64Domains = (encodedString: string): string[] => {
    return encodedString.split(".").map((domain) => atob(domain))
}

/**
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 400
 * @framerDisableUnlink
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */

function FLicensing(props) {
    const [isValid, setIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [currentDomain, setCurrentDomain] = useState("")

    const decodedDomains = decodeBase64Domains(encodedDomains)

    useEffect(() => {
        if (!props.isLicensingEnabled) {
            console.log("Licensing is not enabled.")
            setIsValid(true)
            setIsLoading(false)
            return
        }

        setCurrentDomain(window.location.hostname)

        const isDomainValid = decodedDomains.some((domain) =>
            currentDomain.endsWith(domain)
        )
        setTimeout(() => {
            setIsValid(isDomainValid)
            setIsLoading(false)
        }, 0)
    }, [props.isLicensingEnabled, currentDomain])

    if (!isValid) {
        return (
            <Frame
                style={{
                    color: "white",
                    fontSize: "0.8rem",
                    textAlign: "center",
                    width: "370px",
                    userSelect: "none",
                    background: "#0a0a0a",
                    padding: "15px 15px 20px 15px",
                    borderRadius: "16px",
                    transition: "opacity 1.5s ease-in-out",
                    opacity: isLoading ? 0 : 1,
                    position: "fixed",
                    top: "10%",
                    justifyContent: "center",
                    alignContent: "center",
                    zIndex: "99999",
                }}
            >
                <div
                    style={{
                        // Styling for popup
                        color: "#888",
                        fontSize: "0.65rem",
                        textAlign: "center",
                        maxWidth: "550px",
                        fontWeight: "100",
                        userSelect: "none",
                        textTransform: "uppercase",
                        lineHeight: "1.8",
                        padding: "8px 15px 0 15px",
                    }}
                >
                    This demo component works only on Framer staging.
                    <br />
                    Buy for{" "}
                    <a
                        href="${checkoutLink}"
                        target="_blank"
                        style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                        ${notificationMessage}
                    </a>{" "}
                </div>
            </Frame>
        )
    }

    // Use a dynamic import for the component
    const ImportedComponent = React.lazy(() => import("${importLink}"))

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <ImportedComponent {...props} />
            </React.Suspense>
        </div>
    )
}

FLicensing.defaultProps = {
    isLicensingEnabled: true,
    onToggleLicensing: () => {},
}

copyPropertyControls(ImportedComponent, FLicensing);

export default FLicensing
FLicensing.displayName = "${componentName}"
