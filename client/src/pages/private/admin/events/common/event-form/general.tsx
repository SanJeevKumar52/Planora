import { Button, Form, Input, Tag } from "antd";
import type { EventFormStepProps } from ".";
import { useState } from "react";

function General({ currentStep, setCurrentStep, eventData, setEventData }: EventFormStepProps) {
  const [guestInputValue, setGuestInputValue] = useState("");

  const onGuestAdd = () => {
    const existingGuests = eventData.guests || [];
    const newGuests = guestInputValue
      .split(",")
      

    setEventData({
      ...eventData,
      guests: [...existingGuests, ...newGuests],
    });
    setGuestInputValue(""); 
  };

  const onGuestRemove = (guest: string) => {
    const existingGuests = eventData.guests || [];
    const newGuests = existingGuests.filter((g: string) => g !== guest);
    setEventData({
      ...eventData,
      guests: newGuests,
    });
  };

  return (
    <div className="flex flex-col">
      <Form.Item label="Event Name" required>
        <Input
          placeholder="Event Name"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Description" required>
        <Input.TextArea
          placeholder="Description"
          value={eventData.description}
          onChange={(e) =>
            setEventData({ ...eventData, description: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item label="Organizer" required>
        <Input
          placeholder="Organizer"
          value={eventData.organizer}
          onChange={(e) =>
            setEventData({ ...eventData, organizer: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item className="flex gap-5 mt-5" label="Guests list (comma separated)">
        <Input
          placeholder="Guests list (comma separated)"
          value={guestInputValue}
          onChange={(e) => setGuestInputValue(e.target.value)}
        />
        <Button disabled={!guestInputValue} onClick={onGuestAdd}>
          Add
        </Button>
      </Form.Item>

      <div className="flex flex-wrap gap-2">
        {eventData.guests?.map((guest: string, index: number) => (
          <Tag
            key={index}
            closable
            onClose={() => onGuestRemove(guest)} // ✅ fixed
          >
            {guest}
          </Tag>
        ))}
      </div>
      <div className="flex gap-10 mt-5 justify-between">
        <Button>Back</Button>
        <Button type="primary" onClick={()=>setCurrentStep(currentStep+1)} disabled={!eventData.name|| !eventData.description||!eventData.organizer}>Next</Button>
      </div>
    </div>
  );
}

export default General;
