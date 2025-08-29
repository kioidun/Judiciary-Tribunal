import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./faq.css";

const Faq = ({ id, question, answer, url, isOpen, onToggle }) => {
  return (
    <article className="faq">
      <div className="faq_header">
        <h4>{question}</h4>
        <button
          className="faq_icon"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`answer-${id}`}
        >
          {isOpen ? (
            <AiOutlineMinus className="minus-pointer" />
          ) : (
            <AiOutlinePlus className="minus-pointer" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="color_link">
          <p id={`answer-${id}`}>
            {answer}{" "}
            {url &&
              (url.startsWith("http") ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  click here
                </a>
              ) : (
                <Link to={url}>click here</Link>
              ))}
          </p>
        </div>
      )}
    </article>
  );
};

export default Faq;
