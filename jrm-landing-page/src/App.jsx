import './App.css'
import { Navbar } from './components/Navbar';
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { OurMission } from "./components/OurMission";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
      <Navbar/> {/* Navbar will be here*/}
      <main>
        <Hero/>
        <About/>
        <OurMission/>
        <section id="events" className="test-container">
          this is the events
        </section>
        <section id="schedule" className="test-container">
          this is the schedule
        </section>
        <section id="contact" className="test-container">
          this is the contact
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
