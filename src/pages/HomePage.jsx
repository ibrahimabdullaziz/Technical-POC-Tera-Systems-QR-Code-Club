import { Link } from 'react-router-dom';
import Cover from '../components/Cover';
import SummaryBar from '../components/SummaryBar';
import './HomePage.css';

const tocItems = [
  { to: '/executive-summary', label: 'Executive Summary' },
  { to: '/architecture', label: 'Architecture Overview & Observed Stack' },
  { to: '/security', label: 'Security Gaps' },
  { to: '/scalability', label: 'Scalability & Reliability Gaps' },
  { to: '/analytics', label: 'Analytics & Data Gaps' },
  { to: '/integration', label: 'Integration & API Gaps' },
  { to: '/ux', label: 'Product & UX Gaps' },
  { to: '/compliance', label: 'Compliance & Data Governance' },
  { to: '/recommendations', label: 'Recommendations Roadmap' },
];

export default function HomePage() {
  return (
    <>
      <Cover />

      <div className="toc">
        <h2>Table of Contents</h2>
        <ol>
          {tocItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </div>

      <SummaryBar />
    </>
  );
}
