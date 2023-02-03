import React from "react";

const Home = () => (
  <div>
    <h2 className="mb-6 lg:mb-0 lg:p-6 text-2xl font-semibold">Welcome!</h2>
    <div className="grid rid-cols-1 md:grid-cols-3">
      <div className="mb-6 sm:mb-0 sm:pr-6 lg:p-6 text-justify">
        <p className="text-lg leading-loose">
          I am a full stack web developer with 6 years commercial experience and
          a 2:1 BSc (hons) in Web Development from Stafford University. I
          initially began website development as a hobby around 2012 and well
          and truly caught the coding bug from that point on.
        </p>
      </div>
      <div className="mb-6 sm:mb-0 sm:pr-6 lg:p-6 text-justify">
        <p className="text-lg leading-loose">
          During my time working in the industry I have built bespoke software
          such as CRMs and Project Managements solutions. I've also built
          everything from large scale e-commerce platforms to mobile
          applications and CMS websites.
        </p>
      </div>
      <div className="lg:p-6 text-justify">
        <p className="text-lg leading-loose">
          During my time working in the industry I have built bespoke software
          such as CRMs and Project Managements solutions. I've also built
          everything from large scale e-commerce platforms to mobile
          applications and CMS websites.
        </p>
      </div>
    </div>
    <div>
      <img
        className="my-12 p-12 mx-auto w-100 md:w-6/12"
        src="desk.svg"
        alt="Desk"
      />
    </div>
  </div>
);

export default Home;
