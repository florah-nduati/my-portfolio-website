import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/certifications/certifications";
import Contact from "./components/Contacts/Contacts";
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
