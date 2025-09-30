
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
import OcrAgent from './pages/services/ai-agent/ocr-agent'
import ManagedDetection from './pages/services/cyber-security/managed-detection'
import ThreatVulnerability from './pages/services/cyber-security/threat-vulnerability'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/hire-recruiter" element={<HireRecruiter />} />
        <Route path="/services/it-staffing" element={<Staffing />} />
        <Route path="/industries" element={<IndustriesPage />} />
        {/* {'agents'}  */}
        <Route path="/services/agents" element={<AiAgents />} />
        <Route path="/services/cx-agent" element={<AiCustomerSupportAgent />} />
        <Route path="/services/ocr-agent" element={<OcrAgent />} />
        <Route path="/services/sec-ops-agent" element={<OcrAgent />} />
        <Route path="/services/it-ops-agent" element={<OcrAgent />} />
        <Route path="/services/marketing-agent" element={<OcrAgent />} />
        {/* {'cyber security'} */}
        <Route path="/services/managed-detection" element={<ManagedDetection />} />
        <Route path="/services/threat-management" element={<ThreatVulnerability />} />
        <Route path="/services/governance-risk" element={<CareersPage />} />
        <Route path="/services/data-privacy" element={<CareersPage />} />

        {/* {'others'} */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ContactFooterSection />
    </BrowserRouter>
  )
}

export default App
