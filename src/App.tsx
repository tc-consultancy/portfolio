
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import HireRecruiter from './pages/services/hire-recruiter'
import Staffing from './pages/services/staffing' 
import { IndustriesPage } from './pages/industries'
import { Navbar } from './components/core/navbar'
import ContactFooterSection from './pages/home/sections/contact-footer'
import About from './components/common/about'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/hire-recruiter" element={<HireRecruiter />} />
        <Route path="/services/it-staffing" element={<Staffing />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/careers" element={<Staffing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ContactFooterSection />
    </BrowserRouter>
  )
}

export default App
