import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../../../../imagestwo/retirement.jpg";
import qrcode from "../../../../imagestwo/pppcqrcode.jpeg";

function Rbat() {
  return (
    <>
      <div className="jurisdiction_image">
        <img src={image} />
      </div>
      <section className="jurisdiction_plans">
        <div className="jurisdiction_container-left_box">
          <h2 className="tribename">
            RETIREMENT BENEFITS APPEALS TRIBUNAL
          </h2>
          <h2 className="tribenames"> Chairperson</h2>
          <h3>Hon. Charles Ongoto</h3>
          <h2 className="tribenamess">Current Members</h2>

          <ul className="list_members">
            <li className="list_member">Hon. Timothy Kimathi</li>
            <li className="list_member">Hon. Anthony Kiprono</li>
          </ul>
           <h2>Permanent Tribunal Virtual Court Links</h2>
          <div className="link-teams">
             <Link
              className="link-teams-color"
              to="https://t.ly/awfu4"
              target="_blank"
            >
              https://t.ly/awfu4
            </Link> 
            <h2>Contact</h2>
            <h3>Email:-rbat@court.go.ke</h3>
          </div>
        </div>
        <div className="jurisdiction_container-right_box">
          <h1>Establishment</h1>
          <h3>
          The Retirement Benefits Tribunal is established under Section 47 of the Retirement Benefits Act 1997. The Minister shall, by order published in the Gazette establish an Appeals
Tribunal for the purpose of hearing appeals under this Act.

          </h3>
          <h2>Members of the Tribunal</h2>
          <h3>
          The Tribunal shall consist of a chairman and four other members who shall be appointed by the Minister and who shall hold office for a period of three years 
          </h3>

          <h2>Jurisdiction</h2>

          <ul>
            <li>
              - Any person aggrieved by a decision of the Authority or of the Chief Executive Officer under the provisions of this Act or any regulations made thereunder may appeal to the Tribunal within thirty days of the receipt of the decision.
            </li>
            <li>
              - Where any dispute arises between any person and the Authority as to the exercise of the powers conferred upon the Authority by this Act, either party may appeal to the Tribunal in such manner as may be prescribed.
            </li>
            <li>
              - Under the NSSF Act 45 of 2013 – Any dispute on matters relating to contributions, benefits, registration, rejection or variation of dependents or cancellation arising from the application of this Act, the aggrieved person shall be referred to the Tribunal set out under the Retirement Benefits Act (Cap. 197).
            </li>

          </ul>

          {/* <h2>Scan to see Judgments</h2>
          <img className="qrcode" src={qrcode} /> */}

          {/* <div className="button-top">
            <Link
              className="button-link"
              to="https://sites.google.com/view/ppp-decisions/home"
              target="_blank"
            >
              {" "}
              Click to See The Judgments{" "}
            </Link>
          </div> */}
          <h2>Location</h2>
          <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
          <h2>Contact</h2>
          <h3>Email:-rbat@court.go.ke</h3>
          <button className="efiling">
            {" "}
            <Link to="https://efiling.court.go.ke/" target="_blank">
              Click to File a Case
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Rbat;
