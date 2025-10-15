
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/not-found'
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
import TechnicalSupport from './pages/services/it-cloud-services/technical-support'
import DocManagementSoftware from './pages/services/document-management/doc-management-software'
import DocScanningServices from './pages/services/document-management/doc-scanning-services'
import CustomDocManagementService from './pages/services/document-management/custom-doc-management-service'
import HighSpeedScanner from './pages/services/document-management/high-speed-scanner'
import AutomaticElectronicForms from './pages/services/document-management/automatic-electronic-forms'
import FinancialAccountingManagement from './pages/services/finance/financial-accounting-management'
import DataAndAnalytics from './pages/services/data-and-analytics/data-analytics'
import DataEngineering from './pages/services/data-and-analytics/data-engineer'
import DataVisualization from './pages/services/data-and-analytics/data-visualization'
import SecAgent from './pages/services/ai-agent/sec-agent'
import OpsAgent from './pages/services/ai-agent/ops-agent'
import MarketingAgent from './pages/services/ai-agent/marketing-agent'
import AIML from './pages/services/ai-ml-services/ai-ml'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="services/outsourcing" element={<Outsourcingone />} /> */}
        <Route path="services/outsourcing" element={<Outsourcingone />} />
        <Route path="/services/hire-recruiter" element={<NewHireYourRecruiter />} />
        <Route path="/services/it-staffing" element={<Staffing />} />
        <Route path="/industries" element={<IndustriesPage />} />
        {/* {'agents'}  */}
        <Route path="/services/agents" element={<AiAgents />} />
        <Route path="/services/cx-agent" element={<AiCustomerSupportAgent />} />
        <Route path="/services/ocr-agent" element={<OcrAgent />} />
        <Route path="/services/sec-ops-agent" element={<SecAgent />} />
        <Route path="/services/it-ops-agent" element={<OpsAgent />} />
        <Route path="/services/marketing-agent" element={<MarketingAgent />} />

        {/* ai-ml  */}
        <Route path="/services/ai-ml" element={<AIML />} />

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
        <Route path="/services/security-implementation" element={<ImplimentationService />} />


        {/*  - {'Iot/Cloud Solutions'} */}
        <Route path="/services/infrastructure-outsourcing" element={<InfraOutsourcingServices />} />
        <Route path='/services/managed-services' element={<ManagedServices />} />
        <Route path='/services/microsoft-managed' element={<MicroSoftManagedServices />} />
        <Route path="/services/professional-consulting" element={<ProfessionalConsulting />} />
        <Route path="/services/technical-support" element={<TechnicalSupport />} />


        {/* {'software development'} */}
        <Route path="/services/mobile-web-application" element={<MobileAndWebApp />} />
        <Route path="/services/e-commerce" element={<ECOM />} />
        <Route path="/services/enterprise-application" element={<EnterpriceAppDev />} />
        <Route path="/services/custom-application" element={<CustomAppDev />} />
        <Route path="/services/saas-implementation" element={<SaasImplimentations />} />
        <Route path="/services/cloud-applications" element={<CloudImplimentations />} />


        {/* doc management */}
        <Route path="/services/doc-management-software" element={<DocManagementSoftware />} />
        <Route path="/services/doc-scanning" element={<DocScanningServices />} />
        <Route path="/services/custom-doc-management" element={<CustomDocManagementService />} />
        <Route path="/services/high-speed-scanner" element={<HighSpeedScanner />} />
        <Route path="/services/automatic-electronic-forms" element={<AutomaticElectronicForms />} />


        {/* finance accounting  */}
        <Route path="/services/financial-accounting" element={<FinancialAccountingManagement />} />

        {/* data and analytics  */}
        <Route path="/services/data-analysis" element={<DataAndAnalytics />} />
        <Route path="/services/data-engineering-services" element={<DataEngineering />} />
        <Route path="/services/data-visualization" element={<DataVisualization />} />


        {/* {'others'} */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<About />} />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactFooterSection />
    </BrowserRouter>
  )
}

export default App
