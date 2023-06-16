import useDarkMode from "../../hooks/useDarkMode";
import Moon from "../Icon/Moon/Moon";
import Sun from "../Icon/Sun/Sun";

const ToggleDarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div className="bg-transparent px-6 py-2 ">
      {isDarkMode ? (
        <Moon onClick={() => setIsDarkMode(!isDarkMode)} />
      ) : (
        <Sun onClick={() => setIsDarkMode(!isDarkMode)} />
      )}
    </div>
  );
};

export default ToggleDarkMode;
