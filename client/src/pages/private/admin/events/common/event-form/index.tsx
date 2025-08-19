import { useState } from "react";
import General from "./general";
import LocationAndDate from "./location-and-date";

import Tickets from "./tickets";
import { Steps } from "antd";
import { Form } from "antd";
import Media from "./media";

export interface EventFormStepProps {
    eventData: any;
    setEventData: any;
    setCurrentStep: any;
    currentStep: any;
    selectedMediaFiles?: any;
    setSelectedMediaFiles?: any;
}

function EventForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [eventData, setEventData] = useState({});
    const [selectedMediaFiles, setSelectedMediaFiles] = useState([]);

    // ✅ correct casing and props
    const commonProps: EventFormStepProps = {
        eventData,
        setEventData,
        setCurrentStep,
        currentStep,
        selectedMediaFiles,
        setSelectedMediaFiles
    };



    const stepsData = [
        { name: "General", component: <General {...commonProps} /> },
        { name: "LocationAndDate", component: <LocationAndDate {...commonProps} /> },
        { name: "Media", component: <Media {...commonProps} /> },
        { name: "Tickets", component: <Tickets {...commonProps} /> },
    ];

    return (
        <Form layout="vertical" >
            <div>
                <Steps current={currentStep} onChange={(step) => setCurrentStep(step)}>
                    {stepsData.map((step, index) => (
                        <Steps.Step key={index} title={step.name} />
                    ))}
                </Steps>
                <div className="mt-5">{stepsData[currentStep].component}</div>
            </div>

        </Form>
    );
}

export default EventForm;
