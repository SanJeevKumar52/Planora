import PageTitle from "../../../../../components/page-title"
import EventForm from "../common/event-form"

function CreateEventPage() {
    return (
        <div>
            <PageTitle title="Create Event"/>
            <div className="mt-55"><EventForm/></div>
        </div>
    )
}

export default CreateEventPage