import React from "react";

const Home = () => (
  <div>
    <h1 className="mb-6 lg:mb-0 lg:py-6 text-2xl font-semibold">Welcome!</h1>
    <div className="grid rid-cols-1 md:grid-cols-3">
      <div className="mb-6 md:mb-0 md:pr-6 text-justify">
        <p className="text-lg leading-loose">
          I'm Alex a full stack web developer with 7 years commercial experience
          and a 2:1 BSc (hons) in Web Development from Stafford University. I
          initially began website development as a hobby around 2012 and well
          and truly caught the coding bug from that point on.
        </p>
      </div>
      <div className="mb-6 md:mb-0 md:pl-6 md:pr-6 text-justify">
        <p className="text-lg leading-loose">
          During my time working in the industry I have built bespoke software
          such as CRMs and Project Managements solutions. I've also built
          everything from large scale e-commerce platforms to mobile
          applications and CMS websites.
        </p>
      </div>
      <div className="md:pl-6 text-justify">
        <p className="text-lg leading-loose">
          I predominantly work as a full stack developer but have recently
          focused on front end work. My last commercial project saw me working
          on a React pensions projection app for Scottish Widows. In my spare
          time I've also worked on various projects using React, Ember js and
          Vue js.
        </p>
      </div>
    </div>
    <div>
      <img className="p-12 mx-auto w-100 md:w-6/12" src="desk.svg" alt="Desk" />
    </div>
  </div>
);

export default Home;
