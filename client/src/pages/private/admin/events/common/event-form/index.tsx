import { useState } from "react";
import General from "./general"
import LocationAndDate from "./location-and-date"
import Tickets from "./tickets"
import { Steps } from "antd"


function EventForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const stepsData = [
        { name: "General", component: <General /> },
        { name: "LocationAndDate", component: <LocationAndDate /> },
        { name: "Media", component: <div>Media</div> },
        { name: "Tickets", component: <Tickets /> }

    ]
    return (
        <div>
            <Steps current={currentStep} onChange={(step) => setCurrentStep(step)}>
                {stepsData.map((step, index) => (
                    <Steps.Step key={index} title={step.name} />
                ))}
            </Steps>
            <div className="mt-5">{stepsData[currentStep].component}</div>
        </div>
    )
}

export default EventForm