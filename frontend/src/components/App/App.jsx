
import Intro from '/src/components/Intro/Intro.jsx'
import Chatbot from '/src/components/Chatbot/Chatbot.jsx'
import Navigation from '/src/components/Navigation/Navigation.jsx'
import About from '/src/components/About/About.jsx'
import Experience from '/src/components/Experience/Experience.jsx'
import Projects from '/src/components/Projects/Projects.jsx'
import Footer from '/src/components/Footer/Footer.jsx'
import global from '/src/components/App/App.module.css'

function App() {

  return (
    <>
      {/* <Navigation /> */}
      <Intro />
      <Chatbot id="#chatbot" />
      <About id="#about" />
      <Experience id="#experience" />
      <Projects id="#projects" />
      <Footer />
    </>
  );
}

export default App;
