import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/explore', label: 'Explore' },
  { to: '/matches', label: 'Matches' },
  { to: '/messages', label: 'Messages' },
  { to: '/settings', label: 'Settings' },
];

function getInitials(name) {
  if (!name) return '?';
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const initials = getInitials(user?.displayName || user?.email?.split('@')[0]);

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
        <div className="user-profile" onClick={handleLogout} title="Click to sign out">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" className="user-avatar-img" />
          ) : (
            <div className="user-avatar">{initials}</div>
          )}
          <div className="user-info">
            <div className="user-name">{displayName}</div>
            <div className="user-role">Sign out</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
