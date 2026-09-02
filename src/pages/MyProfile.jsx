import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const MyProfile = () => {
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

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="card bg-base-100 shadow-xl border w-full max-w-lg">
        <div className="card-body items-center text-center">

          {/* Profile Photo */}
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/5GzXkwq/user.png"
                }
                alt="Profile"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            {user?.displayName || "User"}
          </h1>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>

          <div className="divider w-full"></div>

          <div className="w-full text-left space-y-3">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {user?.displayName || "Not set"}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {user?.email}
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Link
              to="/update-profile"
              className="btn btn-primary"
            >
              Update Profile
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-error"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;