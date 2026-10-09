import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 VovaStyle. ყველა უფლება დაცულია.</p>
      <Link to="/#contact">თბილისი, ცაგარელის ქ. 100 <span aria-hidden="true">↗</span></Link>
      <Link to="/">VovaStyle</Link>
    </footer>
  );
}
