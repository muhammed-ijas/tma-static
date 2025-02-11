import Header from "../components/Header"
import FirstScreen from "../components/FirstScreen"
import Aboutus from "../components/About-us"
import ThirdScreen from "../components/ThirdScreen"
// import FourthScreen from "../components/FourthScreen"
import SecondScreen from "../components/SecondScreen"
import Stats from "../components/Stats"

const LandingPage = () => {
  return (
    <>
    <Header/>
    <FirstScreen/>
    <Aboutus/>
    <Stats/>
    <ThirdScreen/>
    {/* <FourthScreen/> */}
    <SecondScreen/>
    
    
    </>
  )
}

export default LandingPage