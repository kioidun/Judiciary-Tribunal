import React, { useEffect, useState } from "react";
import legal from "../../resources/images/tribunals_four.jpeg";
import constitutionthree from "../../../imagestwo/thetribunalslogotwo.jpeg";
import knowyourt from "../../resources/images/qr-code.jpg";
import "./mainheader.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { mainheader } from "../../resources/data/data";

function Mainheader() {
  const [mainheaders] = useState(mainheader);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = mainheaders.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, mainheaders]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="mainheader">
      <div className="mainheaderr_div">
        <div className="mainheaderr_div_heading">
          <h2>TRIBUNALS IN KENYA</h2>
        </div>
        <div className="mainheaderr-div_maincontent">
          <div className="mainheaderr-div_maincontent_logo">
             <img src={constitutionthree}  alt="Tribunals Logo"/> 
          </div>
          <div className="mainheaderr-div_maincontent_text">
             <p> 
             "Judicial authority vests in and is to be exercised by courts and{" "}
            <b className="big-bold">tribunals</b> established by or under the
            Constitution."
          </p>


             <h3>Article 159 (1) of the Constitution of Kenya.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mainheader;
