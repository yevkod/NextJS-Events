import EventItem from './event-item';
import s from './event-list.module.css';

const EventList = (props) => {
    const {items} = props


    return (
        <ul className={s.list}>
            {items.map((event) => (
                <EventItem key={event.id}
                           id={event.id}
                           title={event.title}
                           location={event.location}
                           date={event.date}
                           image={event.image}/>
            ))}
        </ul>
    );
};

export default EventList;
