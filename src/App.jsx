import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorBanner from './components/AuthorBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExecutiveSummary from './pages/ExecutiveSummary';
import Architecture from './pages/Architecture';
import SecurityGaps from './pages/SecurityGaps';
import ScalabilityGaps from './pages/ScalabilityGaps';
import AnalyticsGaps from './pages/AnalyticsGaps';
import IntegrationGaps from './pages/IntegrationGaps';
import UXGaps from './pages/UXGaps';
import ComplianceGaps from './pages/ComplianceGaps';
import Recommendations from './pages/Recommendations';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <AuthorBanner position="top" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/executive-summary" element={<ExecutiveSummary />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/security" element={<SecurityGaps />} />
          <Route path="/scalability" element={<ScalabilityGaps />} />
          <Route path="/analytics" element={<AnalyticsGaps />} />
          <Route path="/integration" element={<IntegrationGaps />} />
          <Route path="/ux" element={<UXGaps />} />
          <Route path="/compliance" element={<ComplianceGaps />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
        <Footer />
        <AuthorBanner position="bottom" />
      </div>
    </BrowserRouter>
  );
}
