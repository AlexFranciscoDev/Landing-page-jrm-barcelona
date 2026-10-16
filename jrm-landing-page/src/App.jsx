import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { OurMission } from "./components/our-mission/OurMission";
import { GetInvolved } from "./components/get-involved/GetInvolved";
import { BannerCta } from "./components/banner-cta/BannerCta";
import { WhereWeAre } from "./components/where-we-are/WhereWeAre";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navbar/> {/* Navbar will be here*/}
      <main>
        <Hero/>
        <About/>
        <OurMission/>
        <GetInvolved/>
        <BannerCta/>
        <WhereWeAre/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
