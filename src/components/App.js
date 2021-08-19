import React, { useState, useEffect, Fragment } from "react";

// Components
import Hero from "./Hero/Hero";
// import About from "./About/About";
// import Projects from "./Projects/Projects";
// import Contact from "./Contact/Contact";
// import Footer from "./Footer/Footer";

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../data/data.js";

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <Fragment>
      <Hero hero={hero} />
      {/* <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer footer={footer} /> */}
    </Fragment>
  );
}

export default App;
