import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  // Firebase auth check শেষ না হওয়া পর্যন্ত loading
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // Login না থাকলে
  if (!user) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">
          Please login first
        </h2>

        <Link to="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    setUpdating(true);

    try {
      await updateUserProfile(
        name.trim(),
        photoURL.trim()
      );

      toast.success("Profile updated successfully!");

      navigate("/my-profile");
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(error.message || "Failed to update profile.");
    } finally {
      setUpdating(false);
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
                value={user.email || ""}
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
                disabled={updating}
              >
                {updating ? "Updating..." : "Update Profile"}
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