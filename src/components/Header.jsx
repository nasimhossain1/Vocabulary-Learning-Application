import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/start-learning">Start Learning</NavLink>
      </li>

      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>

      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        
        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary"
          >
            Lingo Bingo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Login Button */}
        <div className="navbar-end">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;