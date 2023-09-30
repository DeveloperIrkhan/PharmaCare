import { Home } from "./Components/Home";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Services";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import DetailsPage from "./Components/DetailsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalBillingCoding from "./Pages/MedicalBillingCoding";
import ClaimDenialManagement from "./Pages/ClaimDenialManagement";
import CredentialingServices from "./Pages/CredentialingServices";
import MedicalCoding from "./Pages/MedicalCoding";
import MedicalScribeService from "./Pages/MedicalScribeService";
import { PreAuthorizationServices } from "./Pages/PreAuthorizationServices";
import VirtualAssistantServices from "./Pages/VirtualAssistantServices";
import EligibilityVerification from "./Pages/EligibilityVerification";
function App() {
  
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            exact
            path="/"
            element={<Home />}
          />
          <Route
            className={({ isActive }) => (isActive ? "menu-active" : "")}
            exact
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            exact
            path="/Services"
            element={<Service/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            exact
            path="/contact-us"
            element={<Contact />}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/details-page"
            element={<DetailsPage/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/free-medical-coding"
            element={<MedicalBillingCoding/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/claim-denial-management"
            element={<ClaimDenialManagement/>}
          />


          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/medical-coding"
            element={<MedicalCoding/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/medical-scribe-service"
            element={<MedicalScribeService/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/credentialing-services"
            element={<CredentialingServices/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/pre-authorization-services"
            element={<PreAuthorizationServices/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/virtual-assistant-services"
            element={<VirtualAssistantServices/>}
          />
          <Route
            className={({ isActive }) => (isActive ? 'menu-active' : '')}
            path="/eligibility-verification"
            element={<EligibilityVerification/>}
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
