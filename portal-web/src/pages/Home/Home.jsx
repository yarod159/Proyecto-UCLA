
import Footer from "../../components/footer/Footer"
import SliderHome from "./components/slider/SliderHome"
import Services from "./Services/Services"
import Navbar from "../../components/responsiveAppBar/ResponsiveAppBar"
function Home() {
  return (
    <div>
    <Navbar/>
    <SliderHome/>
    <Services/>
    <Footer/>
    </div>
  )
}

export default Home