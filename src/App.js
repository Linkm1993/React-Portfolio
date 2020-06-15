import React from 'react';
import './App.css';
import FirstName from "./components/name/name";
import JobTitle from "./components/jobTitle/jobTitle"
import Description from "./components/description/description"
import Languages from "./components/languages/languages"
import Contact from "./components/contact/contact"
import Projects from "./components/projects/projects"
import Brk from "./components/brk/brk"

function App() {
  return (
  <div>
    <FirstName />
    <JobTitle />
    <Brk />
    <Brk />
    <Description />
    <Languages />
    <Brk />
    <Brk />
    <Projects />
    <Brk />
    <Brk />
    <Brk />
    <Contact />
  </div>
  );
}

export default App;
