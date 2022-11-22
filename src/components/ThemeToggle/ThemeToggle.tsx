import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosMoon, IoMdSunny } from "react-icons/io";

const ThemeToggle: React.FC = ({}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeToggle = () => {
    if (!mounted) {
      return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
      <button
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
        className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? <IoMdSunny /> : <IoIosMoon />}
      </button>
    );
  };

  return <>{renderThemeToggle()}</>;
};

export default ThemeToggle;
