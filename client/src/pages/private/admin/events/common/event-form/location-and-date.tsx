
import type { EventFormStepProps } from "."
import { Input, Form, Button } from "antd"


function LocationAndDate({
    eventData,
    setEventData,
    setCurrentStep,
    currentStep }: EventFormStepProps) {
    return (
        <div className="grid grid-col-1 lg:grid-col-3">
            <Form.Item label="Address" required>
                <Input
                    placeholder="Address"
                    value={eventData.address}
                    onChange={(e) =>
                        setEventData({ ...eventData, address: e.target.value })
                    }
                />
            </Form.Item>
            <Form.Item label="City" required>
                <Input
                    placeholder="Enter city"
                    value={eventData.city}
                    onChange={(e) => setEventData({ ...eventData, city: e.target.value })}
                />
            </Form.Item>
            <Form.Item label="Pincode" required>
                <Input
                    placeholder="Enter pincode"
                    value={eventData.pincode}
                    onChange={(e) =>
                        setEventData({ ...eventData, pincode: e.target.value })
                    }
                />
            </Form.Item>
            <Form.Item label="Event Date" required>
                <Input
                    placeholder="Date"
                    value={eventData.date}
                    onChange={(e) =>
                        setEventData({ ...eventData, date: e.target.value })
                    }
                />
            </Form.Item>

            <Form.Item label="Event Time" required>
                <Input
                    placeholder="Time"
                    value={eventData.time}
                    onChange={(e) =>
                        setEventData({ ...eventData, time: e.target.value })
                    }
                />
            </Form.Item>
            <div className="flex gap-10 mt-5 justify-between">
                <Button>Back</Button>
                <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}  disabled={
                        !eventData.address ||
                        !eventData.city ||
                        !eventData.pincode ||
                        !eventData.date ||
                        !eventData.time
                    }>Next</Button>
            </div>
        </div>
    )
}

export default LocationAndDate