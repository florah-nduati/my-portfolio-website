import Header from "./Components/Header/header.jsx";
import Hero from "./components/Hero/hero.jsx";
import About from "./components/About/About.jsx";
import Technologies from "./components/Technologies/technologies";
import Projects from "./components/Projects/projects";
import Certifications from "./components/certifications/certifications.jsx";
import Contact from "./components/Contacts/contacts.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
