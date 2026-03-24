import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/explore', label: 'Explore' },
  { to: '/matches', label: 'Matches' },
  { to: '/messages', label: 'Messages' },
  { to: '/settings', label: 'Settings' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <div className="logo-icon">R</div>
          Roomie
        </div>
        <ul className="nav-links">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn-cta">+ Find Roommate</button>
        <div className="icon-btn">
          &#x1F514;
          <span className="notification-dot"></span>
        </div>
        <div className="user-profile">
          <div className="user-avatar">JD</div>
          <div className="user-info">
            <div className="user-name">Jordan Davis</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
