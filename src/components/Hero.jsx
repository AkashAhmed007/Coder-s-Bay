import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to Coder&apos;s Bay</h1>
          <p className="py-6">
          Welcome to Coder&apos;s Bay, your ultimate destination for the latest tech trends, coding tutorials, and innovative insights. Dive in to explore, learn, and elevate your coding journey!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/blogs"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Read Blogs</span>
            </Link>
            <Link
              to="/bookmarks"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Bookmarks</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
