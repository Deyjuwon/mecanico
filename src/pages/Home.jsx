import Brands from '../Components/Brands/Brands'
import Copyright from '../Components/Copyright/Copyright'
import Footer from '../Components/Footer/Footer'

import Hero from '../Components/Hero/Hero'
import HowMecanico from '../Components/HowMecanico/HowMecanico'
import Testimonial from '../Components/Testimonials/Testimonial'
import WhyMecanico from '../Components/WhyMecanico/WhyMecanico'

function Home() {
  
  return (
    <div>
    
      <Hero />
      <WhyMecanico />
      <HowMecanico />
      <Testimonial />
      {/* <Brands /> */}
      <Footer />
      <Copyright />
      
    </div>
  )
}

export default Home
