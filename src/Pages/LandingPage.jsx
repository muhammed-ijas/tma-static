import Header from "../components/Header"
import Home from "../components/Home"
import Aboutus from "../components/About-us"
import Goals from "../components/Goals"
import Stats from "../components/Stats"
import LeadersMessage from "../components/Leaders-message"
import Qoute from "../components/Qoute.jsx"
import Leaders from "../components/Leaders.jsx"
import Donate from "../components/Donate.jsx"
import Footer from "../components/Footer.jsx"
// import Testimonials from "../components/Testimonials.jsx"

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Aboutus/>
    <Stats/>
    <Goals/>
    <LeadersMessage/>
    <Qoute/>
    <Leaders/>
    <Donate/>
    {/* <Testimonials/> */}
    <Footer/>
    </>
  
  )
}

export default LandingPage
