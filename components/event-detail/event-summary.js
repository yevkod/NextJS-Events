import s from './event-summary.module.css';

const EventSummary = (props) => {
    const {title, image} = props;

    return (
        <section className={s.summary}>
            <h1>{title}</h1>
        </section>
    );
};

export default EventSummary;
