import Link from "next/link";

export default function CustomError() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-600">
      <h1 className="text-4xl font-bold text-white">Oops! Page not found.</h1>
      <p className="mt-4 text-lg mb-4 text-white ">
        We can't find the page you're looking for.
      </p>
      <Link
        className="lg:text-2xl text-xl bg-white text-purple-600 lg:px-6 px-4 lg:py-3 py-2 border border-purple-600 rounded-3xl hover:bg-purple-900 hover:text-white transition duration-300"
        href="/"
      >
        Go Back Home
      </Link>
    </div>
  );
}
