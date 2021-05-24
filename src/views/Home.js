import React from 'react';
// import sections
import Hero from '../componentsLanding/sections/Hero';
import FeaturesTiles from '../componentsLanding/sections/FeaturesTiles';
import FeaturesSplit from '../componentsLanding/sections/FeaturesSplit';
import Testimonial from '../componentsLanding/sections/Testimonial';
import Cta from '../componentsLanding/sections/Cta';

const Home = () => {

  return (
    <div style={{background: '#000000'}}>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </div>
  );
}

export default Home;