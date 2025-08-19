import { Button, Input } from "antd";
import type { EventFormStepProps } from "."

function Tickets({ currentStep, setCurrentStep, eventData, setEventData }: EventFormStepProps) {

  const onAddTicketsTypes = () => {
    const existingTicketsTypes = eventData.ticketsTypes || [];
    const updated = [...existingTicketsTypes, { name: "", price: 0, limit: 0 }];
    setEventData({ ...eventData, ticketsTypes: updated });
  };

  const updateTicket = (index: number, field: string, value: any) => {
    const updated = [...(eventData.ticketsTypes || [])];
    updated[index][field] = value;
    setEventData({ ...eventData, ticketsTypes: updated });
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Add Ticket Type */}
      <Button type="primary" onClick={onAddTicketsTypes}>Add Ticket Type</Button>

      {eventData?.ticketsTypes?.length > 0 && (
        <div className="flex flex-col gap-3">
          {/* Header */}
          <div className="grid grid-cols-4 font-semibold">
            <span>Name</span>
            <span>Price</span>
            <span>Limit</span>
            <span>Actions</span>
          </div>

          {/* Render Ticket Rows */}
          {eventData.ticketsTypes.map((ticketTypes: any, idx: number) => (
            <div key={idx} className="grid grid-cols-4 gap-2 items-center">
              <Input 
                value={ticketTypes.name} 
                placeholder="Ticket Name"
                onChange={(e) => updateTicket(idx, "name", e.target.value)} 
              />
              <Input 
                type="number" 
                value={ticketTypes.price} 
                placeholder="Price"
                onChange={(e) => updateTicket(idx, "price", Number(e.target.value))} 
              />
              <Input 
                type="number" 
                value={ticketTypes.limit} 
                placeholder="Limit"
                onChange={(e) => updateTicket(idx, "limit", Number(e.target.value))} 
              />
              <Button danger onClick={() => {
                const updated = eventData.ticketsTypes.filter((_: any, i: number) => i !== idx);
                setEventData({ ...eventData, ticketsTypes: updated });
              }}>
                Remove
              </Button>
            </div>
          ))}
          
          
        </div>
      )}

       {/* Back & Next buttons */}
            <div className="flex justify-between mt-6">
                <Button onClick={() => setCurrentStep(currentStep - 1)}>
                    Back
                </Button>
                <Button
                    type="primary"
                    onClick={() => setCurrentStep(currentStep + 1)}
                   
                >
                    Save And finish
                </Button>
            </div>
    </div>
  )
}

export default Tickets;
