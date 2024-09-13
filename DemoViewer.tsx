import React, { useState, useEffect } from "react"
import { addPropertyControls, ControlType, useMetadata } from "framer"

export function DemoViewer(props) {
    const [demoComponent, setDemoComponent] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [componentProps, setComponentProps] = useState({})
    const metadata = useMetadata()

    useEffect(() => {
        if (props.demoFile) {
            import(`./demos/${props.demoFile}`)
                .then((module) => {
                    setDemoComponent(() => module.default)
                    setComponentProps(module.default.defaultProps || {})

                    // Collect meta directives
                    if (module.default.metaDirectives) {
                        Object.entries(module.default.metaDirectives).forEach(([key, value]) => {
                            metadata[key] = value
                        })
                    }

                    setIsLoading(false)
                })
                .catch((err) => {
                    setError(err.message)
                    setIsLoading(false)
                })
        }
    }, [props.demoFile, metadata])

    if (isLoading) return <div>Loading demo...</div>
    if (error) return <div>Error loading demo: {error}</div>
    if (!demoComponent) return <div>No demo selected</div>

    const DemoComponent = demoComponent
    return <DemoComponent {...componentProps} {...props.demoProps} />
}

// This function will be called after the component is loaded
function updatePropertyControls(component) {
    if (component && component.propertyControls) {
        addPropertyControls(DemoViewer, {
            ...component.propertyControls,
            demoFile: {
                type: ControlType.String,
                title: "Demo File",
            },
        })
    }
}

addPropertyControls(DemoViewer, {
    demoFile: {
        type: ControlType.String,
        title: "Demo File",
    },
})

export default DemoViewer