import Heading from "./Components/Header/Header.jsx"
import Hero from "./Components/Hero/hero.jsx"
import About from "./components/About/About.jsx";
import Technologies from "./Components/Technologies/technologies";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contacts/contacts.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Heading />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
