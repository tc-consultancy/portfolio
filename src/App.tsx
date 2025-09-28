
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import HireRecruiter from './pages/services/hire-recruiter'
import Staffing from './pages/services/staffing' 
import { IndustriesPage } from './pages/industries'
import CareersPage from './pages/careers'
import { Navbar } from './components/core/navbar'
import ContactFooterSection from './pages/home/sections/contact-footer'
import About from './components/common/about'
import AiAgents from './pages/ai-agent'
import AiCustomerSupportAgent from './pages/services/ai-agent/ai-customer-support-agent'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/hire-recruiter" element={<HireRecruiter />} />
        <Route path="/services/it-staffing" element={<Staffing />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/agents" element={<AiAgents />} />
        <Route path="/agent/cx-agent" element={<AiCustomerSupportAgent />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ContactFooterSection />
    </BrowserRouter>
  )
}

export default App
