import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const htest = () => {
    if (currentUrl === "/about") {
      console.log("About page");
    } else {
      console.log("Not About page");
    }
  }
  return (
    <div>
      <button onClick={() => htest()}>sqd</button>
    </div>
  );
};

export default About;