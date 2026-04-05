import React from 'react';
import Page from '../../layouts/Page';
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import Experiences from "./components/Experiences/Experiences";

const Landing: React.FC = () => {
  return (
    <Page>
      <div className={"flex flex-col"}>
        <Hero />
        <About />
        <Experiences />
      </div>
    </Page>
  );
};

export default Landing;