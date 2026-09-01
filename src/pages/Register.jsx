import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter."
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError(
        "Password must contain at least one lowercase letter."
      );
      return;
    }

    setPasswordError("");

    try {
      const result = await createUser(email, password);

      await updateUserProfile(name, photoURL);

      toast.success("Registration successful!");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      toast.success("Google login successful!");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-2">
            Create an Account
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Start learning Japanese vocabulary
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Photo URL
                </span>
              </label>

              <input
                type="url"
                name="photoURL"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Password
                </span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />

              {passwordError && (
                <p className="text-error text-sm mt-2">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Password requirements */}
            <div className="text-sm text-gray-500">
              <p>Password must contain:</p>
              <ul className="list-disc ml-5">
                <li>At least 6 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
              </ul>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          {/* Google */}
          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;