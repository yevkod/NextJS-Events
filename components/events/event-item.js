import s from './event-item.module.css';
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from 'next/image';

const EventItem = (props) => {
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    console.log("title", title)

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={s.item}>
            <Image src={'/' + image} alt={title} width={250} height={160}/>
            <div className={s.content}>
                <div className={s.summary}>
                    <h2>{title}</h2>
                    <div className={s.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={s.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={s.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={s.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
