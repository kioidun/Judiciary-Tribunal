import React, { useState, useEffect } from "react";
import Header from "../../headertwo/Header";

// import { registrar } from "../../resources/data";
import shared from "../../../imagestwo/boardroomthree.jpeg";
import "./team.css";
import { RxValue } from "react-icons/rx";
import { departments } from "../../resources/data/data";
import Card from "../../ui/Card";
import Values from "../../values/Values";
import asugah from "../../resources/images/asugahseven.jpg";
import gracedr from "../../resources/images/gracedrthree.jpeg";
import lydiadr from "../../resources/images/lydiasix.jpg";
import sammie from "../../resources/images/zakeemmiano.JPG";
import njerutwo from "../../resources/images/njerusix.jpg";
import diramu from "../../resources/images/diramuthree.jpg";
import charles from "../../resources/images/charles.jpg";
import nyambura from "../../resources/images/zakeemnyambura.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import tribunals1 from "../../../tribunalimages/tribunal1.JPG";
import tribunals2 from "../../../tribunalimages/tribunal2.JPG";
import tribunals3 from "../../../tribunalimages/tribunal12.JPG";
import tribunals4 from "../../../tribunalimages/tribunal28.JPG";
import tribunals5 from "../../../tribunalimages/tribunal16.JPG";
import tribunals6 from "../../../tribunalimages/tribunal39.JPG";
import tribunals7 from "../../../tribunalimages/tribunal56.JPG";
import tribunals8 from "../../../tribunalimages/tribunal51.JPG";
import tribunals18 from "../../../tribunalimages/tribunal18.JPG"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {teaminfo} from '../../resources/data/data'

function Registrar() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="section-team-info">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={tribunals1} />
          </div>
          <div>
            <img src={tribunals2} />
          </div>
          <div>
            <img src={tribunals3} />
          </div>
          <div>
            <img src={tribunals4} />
          </div>
          <div>
            <img src={tribunals5} />
          </div>
          <div>
            <img src={tribunals6} />
          </div>
          <div>
            <img src={tribunals7} />
          </div>
          
        </Slider>
      </div>
      <div className="title-team-paragraph">
        <p>
          The Tribunals Secretariat was established through a Judicial Service
          Commission Resolution of February 2017. The Secretariat coordinates
          the work and the transition of Tribunals to the Judiciary by offering
          corporate support services through a shared services model to optimize
          service delivery and standardize customer experience as well as
          leverage on economies of scale.
        </p>
        <h3></h3>
      </div>
      <h1 data-aos="fade-up" data-aos-duration="2500" className="admin">
        ADMINISTRATION
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="services__container container grid"
      >
            {teaminfo.map(({id,position,image,name,description})=>{
            return(
              <div className="services__content">
              <div>
                <img src={image} className="uil uil-web-grid services__icon" />
                <h3 className="services__title">
                  {position} <br /> {name}
                </h3>
              </div>
    
              <span className="services__button" onClick={() => toggleTab(id)}>
                View More{" "}
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>
              <div
                className={
                  toggleState === id
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">{position}</h3>
                  <p className="services__modal-description">
                    {/* The Registrar Tribunals is appointed by the Judicial Service
                    Commission under Article 161 (3) of the Constitution and is
                    responsible to the Chief Registrar in the performance of the
                    duties of that office. The Registrar oversights the Tribunal
                    Secretariat to ensure it efficiently and effectively supports
                    tribunals in the dispensation of justice by mainstreaming
                    judiciary best practices and programs in tribunals. Currently,
                    ORT oversees 25 tribunals that have transited to the Judiciary
                    by facilitating human, infrastructural, financial and supply
                    chain related activities to ensure optimal performance by
                    tribunals. */}
                    {description}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
      </div>
      <div className="secretariat_team">
        <h1>Tribunals Secretariat Team</h1>
      <img src={tribunals18}/>
    </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="shared-section"
      >
        <h1>Shared Model</h1>
        <div className="shared">
          <div className="shared_picture">
            <img src={shared} />
          </div>
          <div className="shared_content">
            <p>
              {" "}
              The Office of the Registrar of Tribunals (ORT) was established in
              February 2017 through a resolution of the the Judicial Service
              Commission pursuant to Article 161(3) of the Constitution. The ORT
              is charged with the responsibility of coordinating corporate
              support services to all Tribunals using the shared services model.
              These Corporate Services are Registry, Financial, Supply Chain
              Management, ICT and Communication Services. The common
              characteristic of these Tribunals is that they do not have enough
              case load to warrant full time judicial panels and full-fledged
              registries. This concept allows for standardization of services
              across registries
            </p>
            <p>
              The Secretariat shall provide shared services and facilities to
              tribunals for efficient utilization of scarce resources. The
              infrastructure shall provide for adequate office space, court
              rooms, chambers, board rooms, registries, resource centers, employee
              welfare facilities, ICT infrastructure, vehicles, parking
              facilities among others.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registrar;
