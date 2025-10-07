
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
import GovernanceRisk from './pages/services/cyber-security/governance-risk'
import DataPrivacyAndProtecttion from './pages/services/cyber-security/data-privacy-and-protecttion'
import IotOtSolutions from './pages/services/cyber-security/iot-ot-solutions'
import ImplimentationService from './pages/services/cyber-security/implimentation-service'
import MobileAndWebApp from './pages/services/software-development/mobile-and-web-app'
import ECOM from './pages/services/software-development/e-com'
import EnterpriceAppDev from './pages/services/software-development/enterprice-app-dev'
import CustomAppDev from './pages/services/software-development/custom-application'
import CloudImplimentations from './pages/services/software-development/cloud-implementations'
import SaasImplimentations from './pages/services/software-development/saas-implementations'
import Outsourcing from './pages/outsourcing'
import ManagedServices from './pages/services/it-cloud-services/managed-services'
import MicroSoftManagedServices from './pages/services/it-cloud-services/microsoft-managed-services'
import ProfessionalConsulting from './pages/services/it-cloud-services/professional-consulting'
import InfraOutsourcingServices from './pages/services/it-cloud-services/infra-outsourcing'
import Outsourcingone from './pages/outsourcing/outsourcingone'
import NewHireYourRecruiter from './pages/newhireyourrecruiter'
import Devops from './pages/services/sys-software/devops'
import QualityEngineer from './pages/services/sys-software/quality-engineer'
import EmbeddedSDE from './pages/services/sys-software/embedded-software-development'
import DataEngineer from './pages/services/sys-software/data-engineer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outsourcing" element={<Outsourcingone />} />
        <Route path="/outsourcing" element={<Outsourcing />} />
        <Route path="/services/hire-recruiter" element={<NewHireYourRecruiter />} />
        <Route path="/services/it-staffing" element={<Staffing />} />
        <Route path="/industries" element={<IndustriesPage />} />
        {/* {'agents'}  */}
        <Route path="/services/agents" element={<AiAgents />} />
        <Route path="/services/cx-agent" element={<AiCustomerSupportAgent />} />
        <Route path="/services/ocr-agent" element={<OcrAgent />} />
        <Route path="/services/sec-ops-agent" element={<OcrAgent />} />
        <Route path="/services/it-ops-agent" element={<OcrAgent />} />
        <Route path="/services/marketing-agent" element={<OcrAgent />} />

        <Route path='/services/managed-services' element={<ManagedServices />} />
        <Route path='/services/managed-services' element={<MicroSoftManagedServices />} />

        {/* system n softwares  */}
        <Route path='/services/devops' element={<Devops />} />
        <Route path='/services/quality-engineering' element={<QualityEngineer />} />
        <Route path='/services/embedded-services' element={<EmbeddedSDE />} />
        <Route path='/services/data-engineering' element={<DataEngineer />} />


        {/* {'cyber security'} */}
        <Route path="/services/managed-detection" element={<ManagedDetection />} />
        <Route path="/services/threat-management" element={<ThreatVulnerability />} />
        <Route path="/services/governance-risk" element={<GovernanceRisk />} />
        <Route path="/services/data-privacy" element={<DataPrivacyAndProtecttion />} />
        <Route path="/services/iot-security" element={<IotOtSolutions />} />

        {/* {'Iot/Cloud Solutions'} */}
        <Route path="/services/security-implementation" element={<ImplimentationService />} />
        <Route path="/services/professional-consulting" element={<ProfessionalConsulting />} />
        <Route path="/services/infrastructure-outsourcing" element={<InfraOutsourcingServices />} />

        {/* {'software development'} */}
        <Route path="/services/mobile-web-application" element={<MobileAndWebApp />} />
        <Route path="/services/e-commerce" element={<ECOM />} />
        <Route path="/services/enterprise-application" element={<EnterpriceAppDev />} />
        <Route path="/services/custom-application" element={<CustomAppDev />} />
        <Route path="/services/saas-implementation" element={<SaasImplimentations />} />
        <Route path="/services/cloud-applications" element={<CloudImplimentations />} />

        {/* {'others'} */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ContactFooterSection />
    </BrowserRouter>
  )
}

export default App
