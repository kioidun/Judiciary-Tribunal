import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./casefiled.css";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Casefilled() {
  const [data, setData] = useState([]);
  const [casespending, setCasesPending] = useState([]);
  const [casesConcluded, setCasesConcluded] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.200.5.175:8089/api/v1/tribunal/filedCasesCount/8")
      .then((response) => {
        console.log(response.data.filedCases + "useeffect");
        setData(response.data.filedCases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  useEffect(() => {
    axios
      .get("http://10.200.5.175:8089/api/v1/tribunal/pendingCasesCount/8")
      .then((response) => {
        console.log(response.data.filedCases);
        setCasesPending(response.data.filedCases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [casespending]);
  useEffect(() => {
    axios
      .get("http://10.200.5.175:8089/api/v1/tribunal/concludedCasesCount/8")
      .then((response) => {
        console.log(response.data.filedCases);
        setCasesConcluded(response.data.filedCases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [casesConcluded]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return<animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  return (
    <section class="wrapper">
      <h1 data-aos="fade-up" data-aos-duration="2500">
        cases filed
      </h1>
      <div data-aos="fade-up" data-aos-duration="2500" className="wrapper-two">
        <div className="container case-filed">
          <div className="i">
            <FaFileAlt />
          </div>
          
          <span className="num" data-val="400">
            <h4>{data ? 80006 : data }</h4>
             {/* {data ? <Number n={data}/> :0} */}
            {/* <Number n ={1000}/> */}
          </span>
          <span className="text"> Total Cases filed</span>
        </div>
        <div className="container case-filed">
          <div className="i">
            <MdOutlinePendingActions />
          </div>
          <span className="num" data-val="400">
            {/* {casespending ? <Number n={casespending} /> : 0}  */}
            <h4>{casespending ?16805 :  casespending}</h4>
            {/* <Number n ={casespending}/> */}
          </span>
          
          <span className="text"> Total Cases pending</span>
        </div>
        <div className="container case-filed">
          <div className="i">
            <IoLockClosedSharp />
          </div>
          
          <span className="num" data-val="400">
            {/* {casesConcluded ? <Number n={casesConcluded} /> : 0} */}

            <h4>{casesConcluded ? 63201 : casesConcluded}</h4>
            {/* <Number n ={1000}/> */}
          </span>
          
          <span className="text"> Total Cases closed</span>
        </div>
      </div>
    </section>
  );
}

export default Casefilled;
