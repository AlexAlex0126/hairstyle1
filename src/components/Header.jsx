import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { to: '/about', label: 'ჩვენ შესახებ' },
  { to: '/#services', label: 'სერვისები' },
  { to: '/portfolio', label: 'ნამუშევრები' },
  { to: '/#reviews', label: 'შეფასებები' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link className="logo" to="/" aria-label="VovaStyle — მთავარი გვერდი" onClick={() => setMenuOpen(false)}>Vova<span>.</span>Style</Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
      </button>
      <nav id="main-navigation" className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="მთავარი ნავიგაცია" onClick={() => setMenuOpen(false)}>
        {navItems.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
        <Link to="/calculator">ფასის კალკულატორი</Link>
        <button type="button" className="nav-btn" onClick={() => window.dispatchEvent(new Event('open-booking'))}>ჩაწერე ვიზიტზე <span aria-hidden="true">↗</span></button>
      </nav>
    </header>
  );
}
