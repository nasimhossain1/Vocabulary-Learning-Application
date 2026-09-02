import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      await resetPassword(email);

      toast.success(
        "Password reset email sent! Please check your inbox."
      );

      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="card bg-base-100 shadow-xl border w-full max-w-md">
        <div className="card-body">

          <h1 className="text-3xl font-bold text-center">
            Forgot Password?
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Enter your email and we'll send you a password reset link.
          </p>

          <form onSubmit={handleResetPassword}>

            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text font-semibold">
                  Email Address
                </span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

          </form>

          <div className="text-center mt-5">
            <Link
              to="/login"
              className="text-primary font-semibold"
            >
              ← Back to Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;