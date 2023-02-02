import React from "react";

const Home = () => (
  <div>
    <h2 className="mb-8 py-4 text-2xl font-semibold">Hi I'm Alex.</h2>
    <div className="grid rid-cols-1 sm:grid-cols-3">
      <div className="mb-6 lg:pr-20 text-justify">
        <p>
          I am a full stack web developer with 6 years commercial experience and
          a 2:1 BSc (hons) in Web Development from Stafford University. I
          initially began website development as a hobby around 2012 and well
          and truly caught the coding bug from that point on.
        </p>
      </div>
      <div className="mb-6 lg:pr-20 text-justify">
        <p>
          During my time working in the industry I have built bespoke software
          such as CRMs and Project Managements solutions. I've also built
          everything from large scale e-commerce platforms to mobile
          applications and CMS websites.
        </p>
      </div>
      <div className="text-justify">
        <p>
          During my time working in the industry I have built bespoke software
          such as CRMs and Project Managements solutions. I've also built
          everything from large scale e-commerce platforms to mobile
          applications and CMS websites.
        </p>
      </div>
    </div>
    <div>
      <img
        className="my-12 lg:my-24 mx-auto w-100 lg:w-6/12"
        src="desk.svg"
        alt="Desk"
      />
    </div>
  </div>
);

export default Home;
