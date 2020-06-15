import React from 'react';
import './App.css';
import FirstName from "./components/name/name";
import JobTitle from "./components/jobTitle/jobTitle"
import Description from "./components/description/description"
import Languages from "./components/languages/languages"
import Contact from "./components/contact/contact"
import Projects from "./components/projects/projects"

function App() {
  return (
  <div>
    <FirstName />
    <JobTitle />
    <Description />
    <Languages />
    <Projects />
    <Contact />
  </div>
  );
}

export default App;
