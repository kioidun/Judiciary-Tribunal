import React from "react";
import { useState } from "react";
import Header from "../../headertwo/Header";
import HeaderImage from "../../resources/images/contacttwo.jpg";
import EmailForm from "../../email/Email";
import { contactsall } from "../../resources/data/data";

import "./contacts.css";

const Contacts = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header
        className="contact_page-title"
        title="Get In Touch"
        image={HeaderImage}
      ></Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="left_side-contact">
            <div className="contact_wrapper">
              <EmailForm className="email_form" />
            </div>
          </div>
          <div className="right_side-contact">
            <h2>Address</h2>
            <h4>
              P.0 Box 30041-00100<br></br>Nairobi
            </h4>
            <h2>Telephone</h2>
            <h4>+254-730181895/91</h4>
            <h2>Location</h2>
            <h4>
              Tribunals Secretariat | Kenya-Re Towers | Upperhill
            </h4>
            <button onClick={() => setShow(!show)}>
              Click to View All Tribunal Contacts
            </button>
          </div>
        </div>
        {show && (
          <div className="contact_all">
            {contactsall.map(
              ({ id, image, name, telephone, email, address, location }) => {
                return (
                  <div className="backgroundcontact" key={id}>
                    <div className="textshow">
                      <h2>{name}</h2>
                      <div className="contacts_headings">
                        <h3 className="contacts_headings-h3">Email: </h3>
                        <h3>{email}</h3>
                      </div>
                      <div className="contacts_headings">
                        <h3 className="contacts_headings-h3">Phone: </h3>
                        <h3>{telephone}</h3>
                      </div>
                      <div className="contacts_headings">
                        <h3 className="contacts_headings-h3"> Address: </h3>
                        <h3>{location}</h3>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Contacts;
