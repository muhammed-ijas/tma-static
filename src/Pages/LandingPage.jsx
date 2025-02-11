import Header from "../components/Header"
import Home from "../components/Home"
import Aboutus from "../components/About-us"
import ThirdScreen from "../components/ThirdScreen"
// import SecondScreen from "../components/SecondScreen"
import Stats from "../components/Stats"
import Goals from "../components/Goals"

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Aboutus/>
    <Stats/>
    <ThirdScreen/>
    <Goals/>
    {/* <SecondScreen/> */}
    </>
  )
}

export default LandingPage