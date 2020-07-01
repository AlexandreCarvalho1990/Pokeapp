import React, { Fragment } from 'react';
import Features from '../layout/Features';
import HeroSection from '../layout/HeroSection';
import FeaturesListSection from './FeaturesListSection';
import MemberSection from '../MemberSection/MemberSection';
import DonorSection from './DonorSection';
const Landing = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesListSection />
      <MemberSection />
      <DonorSection />
    </Fragment>
  );
};

export default Landing;
