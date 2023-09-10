import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-700">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found</p>
        <p className="mt-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Go back to the homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error404;
