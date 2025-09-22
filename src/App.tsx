
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import HireRecruiter from './pages/services/hire-recruiter'
import { Navbar } from './components/core/navbar'
import { ThemeSelector } from './components/ui/ThemeSelector'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services/hire-recruiter" element={<HireRecruiter/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
