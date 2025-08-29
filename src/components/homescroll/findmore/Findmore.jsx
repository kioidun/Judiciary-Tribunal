import React, { useEffect } from "react";
import "./findmore.css";
import knowyourt from "./qr-code-know-y.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { PiArrowSquareOutBold } from "react-icons/pi";

function Findmore() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="container registrar-message">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="findout-more_container with-sticky-offset"
      >
        {/* Left: QR + external link */}
        <div className="findout-more_container_logo">
          <div className="content-link">
            {/* Use <a> for external link */}
            <a
              className="link-teams-color"
              href="https://tinyurl.com/4yvbf7h4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find out more
            </a>
          </div>
          <img
            src={knowyourt}
            alt="Know your tribunal QR code"
            loading="lazy"
          />
        </div>

        {/* Middle: FAQs link */}
        <div className="findout-more_container_faq">
          <div className="content-link">
            <Link className="link-teams-color" to="/faq">
              <PiArrowSquareOutBold /> FAQs
            </Link>
          </div>
          <p>
            This page provides help with the most common questions about
            Tribunals. <br />
            Your Right To Know
            <br />
            Got a question? <br />
            Get your answer
          </p>
        </div>

        {/* Right: Service charter */}
        <div className="findout-more_container_charter">
          <div className="content-link">
            <Link className="link-teams-color" to="/service-charter">
              <PiArrowSquareOutBold /> Our Commitment
            </Link>
          </div>
          <p>
            The purpose of this charter is to outline the service standards
            expected from the Secretariat. We are committed to providing quality
            services that meet our customers’ needs. We endeavour to serve with
            integrity, impartiality, and humility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Findmore;
