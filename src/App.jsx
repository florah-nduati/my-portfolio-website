import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/hero.jsx"
import About from "./components/About/About.jsx";
import Technologies from "./components/Technologies/technologies";
import Projects from "./components/Projects/projects";
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
      <Contact />
    </>
  );
}

export default App;
