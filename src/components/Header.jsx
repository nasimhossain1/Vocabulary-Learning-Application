import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Mobile Menu + Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-xl"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow-lg"
            >
              {navLinks}

              {user && (
                <>
                  <li>
                    <NavLink to="/my-profile">
                      My Profile
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/update-profile">
                      Update Profile
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary ml-2"
          >
            Lingo Bingo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            {navLinks}

            {user && (
              <>
                <li>
                  <NavLink to="/my-profile">
                    My Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/update-profile">
                    Update Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {user ? (
            <>
              {/* User Photo */}
              <Link
                to="/my-profile"
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "My Profile"}
              >
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/5GzXkwq/user.png"
                      }
                      alt="Profile"
                    />
                  </div>
                </div>
              </Link>

              {/* Desktop User Name */}
              <span className="hidden md:block font-semibold">
                {user.displayName || "User"}
              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn btn-error btn-sm text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;