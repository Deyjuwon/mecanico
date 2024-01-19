import './App.css'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Individuals from './pages/Individuals'
import Professionals from './pages/Professionals'
import Services from './pages/Services'
import Marketplace from './pages/Marketplace'

 
function App() {

  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Individuals' element={<Individuals />} />
          <Route path='/Professionals' element={<Professionals />} />
          <Route path='/Marketplace' element={<Marketplace />} />
          <Route path='/Services' element={<Services />} />
          
          
        </Routes>
  
      
      
    </div>
  )
}

export default App
