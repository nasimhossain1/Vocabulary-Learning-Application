import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(name, photoURL);

      toast.success("Profile updated successfully!");

      // Firebase user information refresh করার জন্য
      await user.reload();

      navigate("/my-profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Update Profile
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Update your profile information
          </p>

          <form onSubmit={handleUpdate}>
            {/* Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Email
                </span>
              </label>

              <input
                type="email"
                className="input input-bordered w-full"
                value={user?.email || ""}
                disabled
              />

              <label className="label">
                <span className="label-text-alt text-gray-500">
                  Email cannot be changed here
                </span>
              </label>
            </div>

            {/* Photo URL */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold">
                  Photo URL
                </span>
              </label>

              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="btn btn-primary flex-1"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>

              <Link
                to="/my-profile"
                className="btn btn-outline flex-1"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;