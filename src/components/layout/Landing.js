import React, { Fragment } from 'react';
import Features from '../layout/Features';
import HeroSection from '../layout/HeroSection';
import FeaturesListSection from './FeaturesListSection';
const Landing = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesListSection />
    </Fragment>
  );
};

export default Landing;
