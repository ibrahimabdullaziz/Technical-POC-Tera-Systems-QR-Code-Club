import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/executive-summary', label: 'Summary' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/security', label: 'Security' },
  { to: '/scalability', label: 'Scalability' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/integration', label: 'Integration' },
  { to: '/ux', label: 'UX' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/recommendations', label: 'Roadmap' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-brand">POC Report</span>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `navbar-link${isActive ? ' active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
