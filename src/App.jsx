import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero"
import About from "./Components/About/About";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Certifications from "./Components/certifications/Certifications";
import Contact from "./Components/Contacts/Contacts";
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
