import './App.css'
import Brands from './Components/Brands/Brands'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import HowMecanico from './Components/HowMecanico/HowMecanico'
import Testimonial from './Components/Testimonials/Testimonial'
import WhyMecanico from './Components/WhyMecanico/WhyMecanico'

function App() {
  
  return (
    <div>
      <Header />
      <Hero />
      <WhyMecanico />
      <HowMecanico />
      <Testimonial />
      {/* <Brands /> */}
      <Footer />
      
    </div>
  )
}

export default App
