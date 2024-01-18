import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Individuals from './pages/Individuals'

 
function App() {

  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Individuals' element={<Individuals />} />
          
          
        </Routes>
  
      
      
    </div>
  )
}

export default App
