import React from "react";
import Header from "../../headertwo/Header";
import HeaderImage from "../../resources/images/about-stones.jpg";
import StoryImage from "../../resources/images/legal.avif";
import VisonImage from "../../../imagestwo/oursvision.png";
import OurMission from "../../../imagestwo/ourmission.png";
import "./about.css";
import { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";
import VideoPlayer from "react-video-js-player";
import cloudinary from "cloudinary-video-player/all";
import "cloudinary-video-player/cld-video-player.min.css";

const paragraphStyles = {
  WebkitLineClamp: 5,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const About = () => {
  const cloudinaryRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "dqh3zsh3w",
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpentwo, setIsOpentwo] = useState(false);
  const [showReadMoreButton, setShowReadButton] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      setShowReadButton(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);
  return (
    <>
      <Header title="About Us" image={HeaderImage}></Header>
      <section>
        <div className="youtube">
          <video
            className="video_registrar"
            ref={videoRef}
            data-cld-public-id="video_rqddmd"
            width={1300}
            controls
          />
        </div>
      </section>
    </>
  );
};

export default About;
