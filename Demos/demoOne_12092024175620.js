// This is an example of a manually completed demo, using actual data from one of my components, to simulate what the demos should look like after processing:

// FramerBlack
// https://documentation.framer.ai/framer-directives
// CanvasScrollAnimation_1_2 V.1.2

import { Frame, addPropertyControls, ControlType } from "framer"
import React, { useEffect, useState } from "react"
// import { RogueComponent } from "https://framer.com/m/FramerPdfViewer-OBF-7Ony.js@AJuN2eP63GIRChoYFA45"
import ImageSequenceScrollAnimationPreloader, { CanvasScrollAnimation_1_2 } from "https://framer.com/m/ImageSequenceScrollAnimationPreloader-qntg.js"

const copyPropertyControls = (sourceComponent, targetComponent) => {
    if (sourceComponent.propertyControls) {
        addPropertyControls(targetComponent, sourceComponent.propertyControls)
    }
}
// "https://bright-deliberate-181654.framer.app/" should be added to the approved domain list // I don't know exactly how the code for that will look.
const encodedDomains =
    "LmZyYW1lci5hcHA=.LmZyYW1lcnVzZXJjb250ZW50LmNvbQ==.LmZyYW1lcmNhbnZhcy5jb20="
const decodeBase64Domains = (encodedString) => {
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
                        href="https://dub.sh/CookiesCrypto"
                        target="_blank"
                        style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                        $30 using crypto
                    </a> {" "}
                    </div>
            </Frame>
        )
    }
    return (
        <div>
            <CanvasScrollAnimation_1_2 {...props} />
        </div>
    )

    return (
        <div
            style={{
                color: "white",
                fontSize: "0.75rem",
                textAlign: "center",
                maxWidth: "450px",
                userSelect: "none",
                alignContent: "center",
                justifyContent: "center",
                paddingTop: "45%",
            }}
        >
            Loading...
        </div>
    )
}
FLicensing.defaultProps = {
    isLicensingEnabled: true,
    onToggleLicensing: () => {},
}
copyPropertyControls(CanvasScrollAnimation_1_2, FLicensing)
export default FLicensing
FLicensing.displayName = "CanvasScrollAnimation_1_2"






