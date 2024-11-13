import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero"
import About from "./Components/About/About";
import Technologies from "./components/Technologies/technologies";
import Projects from "./Components/Projects/projects";
import Certifications from "./Components/certifications/certifications";
import Contact from "./Components/Contacts/contacts";
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
