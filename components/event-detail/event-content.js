import s from './event.content.module.css';

const EventContent = (props) => {
    const {text} = props;

    return (
        <section className={s.content}>
            {props.children}
        </section>
    );
};

export default EventContent;
