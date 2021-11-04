import EventItem from './EventItem'

const EventList = ({events}) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {events.map(event => (
                <EventItem event={event} key={event.id} />
            ))}
        </div>
    )
}

export default EventList
