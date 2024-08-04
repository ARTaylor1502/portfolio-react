import React, { useState, useRef } from "react";
import Canvas from "../Canvas/Canvas";

const Home = () => {
  const [ballsActive, setBallsActive] = useState(false);
  const [ballsStartCoordinates, setBallsStartCoordinates] = useState({});
  const boxPlaceholderRef = useRef();

  const toggleBallsActive = () => {
    setBallsActive((current) => !current);
  };

  return (
    <div>
      <div>
        <h1 className="mb-6 lg:mb-0 lg:py-6 text-2xl font-semibold">
          Welcome!
        </h1>
        <div className="grid rid-cols-1 md:grid-cols-3">
          <div className="mb-6 md:mb-0 md:pr-6 text-justify">
            <p className="text-lg leading-loose">
              I'm Alex a full stack web developer with 7 years commercial
              experience and a 2:1 BSc (hons) in Web Development from Stafford
              University. I initially began website development as a hobby
              around 2012 and well and truly caught the coding bug from that
              point on.
            </p>
          </div>
          <div className="mb-6 md:mb-0 md:pl-6 md:pr-6 text-justify">
            <p className="text-lg leading-loose">
              During my time working in the industry I have built bespoke
              software such as CRMs and Project Managements solutions. I've also
              built everything from large scale e-commerce platforms to mobile
              applications and CMS websites.
            </p>
          </div>
          <div className="md:pl-6 text-justify">
            <p className="text-lg leading-loose">
              I predominantly work as a full stack developer but have recently
              focused on front end work. My last commercial project saw me
              working on a React pensions projection app for Scottish Widows. In
              my spare time I've also worked on various projects using React,
              Ember js and Vue js.
            </p>
          </div>
        </div>
        <div ref={boxPlaceholderRef} className="z-10 h-80 relative">
          <div
            className={`cube cursor-pointer${ballsActive ? "" : " shake"}`}
            onClick={(e) => {
              toggleBallsActive();
              setBallsStartCoordinates({ x: e.clientX, y: e.clientY });
            }}
          >
            <div className="face -front flex items-center justify-center text-6xl">
              <span>?</span>
            </div>
            <div className="face -left"></div>
            <div className={`face -top${ballsActive ? " pop-top" : ""}`}></div>
            <div className="face -bottom"></div>
            <div className="face -right"></div>
            <div className="face -back"></div>
          </div>
        </div>
      </div>
      {ballsActive && (
        <Canvas
          ballsStartX={ballsStartCoordinates.x}
          ballsStartY={
            ballsStartCoordinates.y - boxPlaceholderRef.current.offsetHeight / 2
          }
        />
      )}
    </div>
  );
};

export default Home;
