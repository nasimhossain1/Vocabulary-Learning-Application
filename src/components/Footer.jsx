import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer max-w-7xl mx-auto p-10">
        
        {/* Brand */}
        <aside>
          <Link to="/" className="text-2xl font-bold">
            Lingo Bingo
          </Link>

          <p className="max-w-xs">
            Learn Japanese vocabulary in a fun, simple and interactive way.
          </p>
        </aside>

        {/* Navigation */}
        <nav>
          <h6 className="footer-title">Navigation</h6>

          <Link to="/" className="link link-hover">
            Home
          </Link>

          <Link to="/start-learning" className="link link-hover">
            Start Learning
          </Link>

          <Link to="/tutorials" className="link link-hover">
            Tutorials
          </Link>

          <Link to="/about-us" className="link link-hover">
            About Us
          </Link>
        </nav>

        {/* Contact */}
        <nav>
          <h6 className="footer-title">Contact</h6>

          <p>Email: support@lingobingo.com</p>

          <p>Dhaka, Bangladesh</p>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title">Follow Us</h6>

          <div className="flex gap-4 text-xl">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </nav>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 text-center py-5">
        <p>
          © {new Date().getFullYear()} Lingo Bingo. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;