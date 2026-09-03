import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-base-200 px-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-primary mb-4">404</div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>

        <p className="text-base-content/70 max-w-md mx-auto mb-8">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <Link to="/" className="btn btn-primary">
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;