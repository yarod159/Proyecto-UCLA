
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import SliderHome from "./components/slider/SliderHome"
import Services from "./Services/Services"
import ResponsiveAppBar from "../../components/responsiveAppBar/ResponsiveAppBar"
function Home() {
  return (
    <div>
    <ResponsiveAppBar/>
    <SliderHome/>
    <Services/>
    <Footer/>
    </div>
  )
}

export default Home