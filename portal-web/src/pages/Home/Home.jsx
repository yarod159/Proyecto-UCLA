
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import SliderHome from "./components/slider/SliderHome"
import Services from "./Services/Services"
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