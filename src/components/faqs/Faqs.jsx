// Faqs.jsx
import React, { useEffect, useState } from "react";
import SectionHead from "../sectionhead/sectionhead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../resources/data/data";
import { frequentlyasked } from "../resources/data/data";
import Faq from "../faq/Faq";
import "./faqs.css";
import Header from "../headertwo/Header";
import news from "../../imagestwo/faqss.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
  const [openId, setOpenId] = useState(null); // 👈 single source of truth

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header className="img-news" title="FAQS" image={news}>
        Tribunals Frequently Asked Questions
      </Header>

      <section className="faqs">
        <div className="container faqs_container">
          <SectionHead
            className="faqs_container-sectionhead"
            icon={<FaQuestion />}
            title="FAQs"
          />

          <div className="faqs_wrapper">
            {faqs.map(({ id, question, answer, url }) => (
              <Faq
                key={id}
                id={id}
                question={question}
                answer={answer}
                url={url}
                isOpen={openId === id} // ✅ only one opens
                onToggle={() => setOpenId(openId === id ? null : id)}
              />
            ))}
          </div>
          <div className="downloads" data-aos="fade-up">
            <p className="color_link" >
              For more information download our
              comprehensive FAQ document{" "}
            </p>
            {frequentlyasked.map(({ id, image, heading, date, download }) => {
              return (
                <div className="downloads-section">
                  {" "}
                  <div className="pdf-section">
                    {" "}
                    <img src={image} />{" "}
                  </div>{" "}
                  <div className="pdf-text">
                    {" "}
                    <h2>{heading}</h2>{" "}
                  </div>{" "}
                 
                  <div className="pdf-button">
                    {" "}
                    <a href={download} target="_blank">
                      {" "}
                      <button>Download</button>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
