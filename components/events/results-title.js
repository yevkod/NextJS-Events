import React from 'react';
import Button from "../ui/button";
import s from './results-title.module.css'

const ResultsTitle = (props) => {
    const {date} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    })
    return (
        <section className={s.title}>
            <h1>Events in {humanReadableDate}</h1>
            <Button link="/events">Show All Events</Button>
        </section>
    );
};

export default ResultsTitle;
