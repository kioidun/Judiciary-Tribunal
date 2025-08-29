import React from "react";
import { useRef, useEffect, useState } from "react";
import Header from "../../headertwo/Header";
import "./events.css";
import news from "../../resources/images/news4.jpg";
import {events} from '../../resources/data/data'

import Aos from "aos";
import "aos/dist/aos.css";
const Leadership = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header title="Tribunal Events" image={news}>
        Latest Tribunals News and Events
      </Header>
      <section className="events">
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="events-section-div"
        >
          {events.map(({
            id,image,title,description
          })=>{
            return (
              <div className="event-one">
              <img src={image} />
  
              <h2>{title}</h2>
              <div className="line"></div>
  
              <p>
                {description}
              </p>
            </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Leadership;
