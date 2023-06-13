import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className=" before:duration-75 text-2xl md:text-3xl lg:text-4xl font-semibold w-full relative before:absolute before:content-[''] before:w-0 before:hover:w-full before:h-1 before:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 before:rounded-sm before:bottom-0 before:z-10">
        <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
          DMovie
        </span>
      </span>
    </Link>
  );
};

export default Logo;
