import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"; import *as React from "react"; import { useEffect, useRef } from "react"; import { Frame, addPropertyControls, ControlType } from "framer"; import CanvasScrollClip from "canvas-scroll-clip";/**
 *
 * @framerIntrinsicWidth 1200
 * @framerIntrinsicHeight 1200
 *
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */export function CanvasScrollAnimation_1_2(props) {
    const containerRef = useRef(null); const [loadingProgress, setLoadingProgress] = React.useState(0); const [loaded, setLoaded] = React.useState(false); useEffect(() => {
        if (props.framePaths && props.frameCount > 0) {
            const framePaths = Array.from({ length: props.frameCount }).map((_, i) => {
                const frameNumber = String(i + 1).padStart(4, "0")// Pads the number to 4 digits
                ; return props.framePaths.replace(/(\d+)(?=.png$|jpg$)/, frameNumber);
            });// Log the frame paths to verify they are correct
            console.log("Frame paths:", framePaths); let loadedImages = 0; const images = []; framePaths.forEach(path => {
                const img = new Image; img.src = path; img.onload = () => {
                    loadedImages += 1; setLoadingProgress(Math.floor(loadedImages / props.frameCount * 100)); images.push(img); if (loadedImages === props.frameCount) {
                        setLoaded(true);// Initialize CanvasScrollClip only after all images are loaded
                        if (containerRef.current) {
                            const canvasScrollClip = new CanvasScrollClip(containerRef.current, { framePath: props.framePaths, frameCount: props.frameCount, scrollArea: props.scrollArea });// Add custom event triggers if provided
                            if (props.customEvents && Array.isArray(props.customEvents)) { props.customEvents.forEach(event => { if (event.frameNumber >= 0 && event.frameNumber < props.frameCount) { canvasScrollClip.events.on(`frame.${event.frameNumber}`, event.callback); } }); }// Trigger custom event when loading is complete
                            if (props.onLoadComplete) { props.onLoadComplete(); }
                        }
                    }
                }; img.onerror = () => { console.error(`Failed to load image at path: ${path}`); };
            });
        }
    }, [props.framePaths, props.frameCount, props.scrollArea]); return /*#__PURE__*/_jsxs(Frame, { size: "100%", background: props.background, children: [!loaded &&/*#__PURE__*/_jsxs(Frame, { size: "100%", style: { position: "fixed", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${props.loadingBackgroundImage})`, backgroundSize: "cover", backgroundColor: props.loadingBackgroundColor, color: props.loadingTextColor, fontSize: props.FontSize, fontFamily: props.loadingFontFamily, height: "100vh" }, children: ["Loading ", loadingProgress, "%"] }),/*#__PURE__*/_jsx(Frame, { ref: containerRef, size: "100%", background: loaded ? "transparent" : "rgba(0,0,0,0)" })] });
} CanvasScrollAnimation_1_2.defaultProps = {
    background: "#ffffff00", framePaths: "https://thefirebrand.github.io/TheGist/dna/dna200_0001.jpg",// "https://thefirebrand.github.io/TheGist/extcompimports/space/space-0001.png",
    //   framePaths: "https://thefirebrand.github.io/TheGist/0001.png",
    frameCount: 47, scrollArea: 3500, FontSize: 24, loadingTextColor: "white", loadingBackgroundColor: "rgba(0,0,0,0.8)", loadingFontFamily: "Arial, sans-serif", loadingBackgroundImage: "", onLoadComplete: () => console.log("Loading complete")
}; addPropertyControls(CanvasScrollAnimation_1_2, { background: { type: ControlType.Color, title: "Background" }, framePaths: { type: ControlType.String, title: "Frame Path" }, frameCount: { type: ControlType.Number, title: "Frame Count", min: 1 }, scrollArea: { type: ControlType.Number, title: "Scroll Area", min: 1e3 }, loadingFontFamily: { type: ControlType.Font, title: "Loading Font Family" }, FontSize: { type: ControlType.Number, title: "Loading Font Size", min: "8", max: "100" }, loadingTextColor: { type: ControlType.Color, title: "Loading Text Color" }, loadingBackgroundImage: { type: ControlType.Image, title: "Loading Background Image" }, onLoadComplete: { type: ControlType.EventHandler, title: "LoadComplete" } }); export default CanvasScrollAnimation_1_2; CanvasScrollAnimation_1_2.displayName = "Image Sequence Scroll Animation + Preloader";
export const __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "CanvasScrollAnimation_1_2", "slots": [], "annotations": { "framerIntrinsicWidth": "1200", "framerSupportedLayoutHeight": "any-prefer-fixed", "framerIntrinsicHeight": "1200", "framerSupportedLayoutWidth": "any-prefer-fixed", "framerDisableUnlink": "*", "framerContractVersion": "1" } }, "CanvasScrollAnimation_1_2": { "type": "reactComponent", "name": "CanvasScrollAnimation_1_2", "slots": [], "annotations": { "framerContractVersion": "1", "framerDisableUnlink": "*", "framerIntrinsicWidth": "1200", "framerSupportedLayoutHeight": "any-prefer-fixed", "framerSupportedLayoutWidth": "any-prefer-fixed", "framerIntrinsicHeight": "1200" } }, "__FramerMetadata__": { "type": "variable" } } }
//# sourceMappingURL=./ImageSequenceScrollAnimationPreloader.map


// // This is an example of a manually completed demo, using actual data from one of my components, to simulate what the demos should look like after processing:

// // FramerBlack
// // https://documentation.framer.ai/framer-directives
// // CanvasScrollAnimation_1_2 V.1.2

// import { Frame, addPropertyControls, ControlType } from "framer"
// import React, { useEffect, useState } from "react"
// // import { RogueComponent } from "https://framer.com/m/FramerPdfViewer-OBF-7Ony.js@AJuN2eP63GIRChoYFA45"
// import ImageSequenceScrollAnimationPreloader, { CanvasScrollAnimation_1_2 } from "https://framer.com/m/ImageSequenceScrollAnimationPreloader-qntg.js"

// const copyPropertyControls = (sourceComponent, targetComponent) => {
//     if (sourceComponent.propertyControls) {
//         addPropertyControls(targetComponent, sourceComponent.propertyControls)
//     }
// }
// // "https://bright-deliberate-181654.framer.app/" should be added to the approved domain list // I don't know exactly how the code for that will look.
// const encodedDomains =
//     "LmZyYW1lci5hcHA=.LmZyYW1lcnVzZXJjb250ZW50LmNvbQ==.LmZyYW1lcmNhbnZhcy5jb20="
// const decodeBase64Domains = (encodedString) => {
//     return encodedString.split(".").map((domain) => atob(domain))
// }

// /**
//  * @framerIntrinsicWidth 400
//  * @framerIntrinsicHeight 400
//  * @framerDisableUnlink
//  * @framerSupportedLayoutWidth any-prefer-fixed
//  * @framerSupportedLayoutHeight any-prefer-fixed
//  */

// function FLicensing(props) {
//     const [isValid, setIsValid] = useState(false)
//     const [isLoading, setIsLoading] = useState(true)
//     const [currentDomain, setCurrentDomain] = useState("")

//     const decodedDomains = decodeBase64Domains(encodedDomains)

//     useEffect(() => {
//         if (!props.isLicensingEnabled) {
//             console.log("Licensing is not enabled.")
//             setIsValid(true)
//             setIsLoading(false)
//             return
//         }

//         setCurrentDomain(window.location.hostname)

//         const isDomainValid = decodedDomains.some((domain) =>
//             currentDomain.endsWith(domain)
//         )
//         setTimeout(() => {
//             setIsValid(isDomainValid)
//             setIsLoading(false)
//         }, 0)
//     }, [props.isLicensingEnabled, currentDomain])

//     if (!isValid) {
//         return (
//             <Frame
//                 style={{
//                     color: "white",
//                     fontSize: "0.8rem",
//                     textAlign: "center",
//                     width: "370px",
//                     userSelect: "none",
//                     background: "#0a0a0a",
//                     padding: "15px 15px 20px 15px",
//                     borderRadius: "16px",
//                     transition: "opacity 1.5s ease-in-out",
//                     opacity: isLoading ? 0 : 1,
//                     position: "fixed",
//                     top: "10%",
//                     justifyContent: "center",
//                     alignContent: "center",
//                     zIndex: "99999",
//                 }}
//             >
//                 <div
//                     style={{
//                         // Styling for popup
//                         color: "#888",
//                         fontSize: "0.65rem",
//                         textAlign: "center",
//                         maxWidth: "550px",
//                         fontWeight: "100",
//                         userSelect: "none",
//                         textTransform: "uppercase",
//                         lineHeight: "1.8",
//                         padding: "8px 15px 0 15px",
//                     }}
//                 >
//                     This demo component works only on Framer staging.
//                     <br />
//                     Buy for{" "}
//                     <a
//                         href="https://dub.sh/CookiesCrypto"
//                         target="_blank"
//                         style={{ color: "#ffffff", textDecoration: "none" }}
//                     >
//                         $30 using crypto
//                     </a> {" "}
//                     </div>
//             </Frame>
//         )
//     }
//     return (
//         <div>
//             <CanvasScrollAnimation_1_2 {...props} />
//         </div>
//     )

//     return (
//         <div
//             style={{
//                 color: "white",
//                 fontSize: "0.75rem",
//                 textAlign: "center",
//                 maxWidth: "450px",
//                 userSelect: "none",
//                 alignContent: "center",
//                 justifyContent: "center",
//                 paddingTop: "45%",
//             }}
//         >
//             Loading...
//         </div>
//     )
// }
// FLicensing.defaultProps = {
//     isLicensingEnabled: true,
//     onToggleLicensing: () => {},
// }
// copyPropertyControls(CanvasScrollAnimation_1_2, FLicensing)
// export default FLicensing
// FLicensing.displayName = "CanvasScrollAnimation_1_2"






