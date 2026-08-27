import './App.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/> {/* Navbar will be here*/}
      <main>
        <section id="home" className="test-container">
          this is the home
        </section>
        <section id="about" className="test-container">
          about us
        </section>
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
    </>
  )
}

export default App
