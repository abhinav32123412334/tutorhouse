import React from "react";
import "./Home.css";
import Banner from "../../components/HomeBanner/Banner";
import BrowseTtr from "../../components/BrowserTutor/BrowseTutor";
import Logoslider from "../../components/Logoslider/Logoslider";
import Hiw from "../../components/Howitworks/Hiw";
import Quest from "../../components/Quest/Quest";
import Team from "../../components/Team-Tutor/Team";
import Benefits from "../../components/Benefits/Benefits";
import Faq from "../../components/Faq/Faq";
import Award from "../../components/Award/Award";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrowseTtr />
      <Logoslider />
      <Hiw />
      <Quest />
      <Team />
      <Benefits />
      <Faq />
      <Award />
    </div>
  );
};

export default Home;
