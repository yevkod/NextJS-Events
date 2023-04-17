const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: "Everyone can learn to code! Yes, everyone! In this event, we are going to know how to code",
        location: "Somestreet 25, 12345 San Somewhereo",
        date: "2021-05-12",
        image: "images/coding-event.jpg",
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for extrovert',
        description: "Everyone can learn to code! Yes, everyone! In this event, we are going to know how to code",
        location: "Somestreet 25, 12345 San Somewhereo",
        date: "2022-01-15",
        image: "images/extrovert-event.jpg",
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for introvert',
        description: "Everyone can learn to code! Yes, everyone! In this event, we are going to know how to code",
        location: "Somestreet 25, 12345 San Somewhereo",
        date: "2021-08-19",
        image: "images/introvert-event.jpg",
        isFeatured: true,
    },
];

export const getFeaturedEvents = () => {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export const getAllEvents = () => {
    return DUMMY_EVENTS
}

export const getFilteredEvents = (dateFilter) => {
    const {year, month} = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    })

    return filteredEvents;
}

export const getEventById = (id) => {
    return DUMMY_EVENTS.find((event) => event.id === id)
}
