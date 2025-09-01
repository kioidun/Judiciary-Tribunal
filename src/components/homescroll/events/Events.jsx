import React from "react";
import { events } from "../../resources/data/data";
import { useRef, useEffect, useState } from "react";
import "./events.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Events = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <section className="events-home">
      <div className="events-home-div" data-aos="fade-up"
          data-aos-duration="2500"
         >
        <h1>Events</h1>
        <p>Stay updated with the latest news and events from the tribunal.</p>
        <div className="events-home-section">
          {events.slice(0, 3).map(({ id, image, title, description }) => (
            <div key={id} className="event-one">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <div className="line"></div>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <Link to ="/events">
          <button>Explore More</button>
        </Link>
      </div>
    </section>
  );
};

export default Events;
