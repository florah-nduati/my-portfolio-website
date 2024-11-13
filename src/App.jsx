import Header from "./Components/Header/header";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Technologies from "./components/Technologies/technologies";
import Projects from "./components/Projects/projects";
import Certifications from "./components/certifications/certifications";
import Contact from "./components/Contacts/contacts";
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
