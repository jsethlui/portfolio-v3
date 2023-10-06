
import Intro from '/src/components/Intro/Intro.jsx'
import Navigation from '/src/components/Navigation/Navigation.jsx'
import About from '/src/components/About/About.jsx'
import Experience from '/src/components/Experience/Experience.jsx'
import Footer from '/src/components/Footer/Footer.jsx'
import global from '/src/components/App/App.module.css'

function App() {

  return (
    <>
      <Navigation />
      <Intro className={global.intro} />
      <About className={global.about} id="#about" />
      <Experience className={global.experience} id="#experience" />
      <Footer className={global.footer} />
    </>
  );
}

export default App;
