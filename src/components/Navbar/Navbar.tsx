import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/seo";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { Logo } from "./Logo";

const Navbar: React.FC = ({}) => {
  const [isScrolled, setScrolled] = useState<boolean>();

  const handleScroll = () => {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrolled(bodyScrollTop > 40);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 flex w-full justify-center py-6",
        "bg-white/90 backdrop-blur-sm backdrop-saturate-150 dark:bg-black/90",
        "transition-[backdrop-filter,background-color]",
        !isScrolled &&
          "md:!bg-transparent md:backdrop-blur-none md:backdrop-saturate-100"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link href={"/"} title={SITE_NAME} passHref>
            <div className="mt-[5px] mr-2 h-[23px]">
              <Logo />
            </div>
          </Link>
          {NAV_ITEMS.map(({ title, route }) => (
            <Link href={route} passHref key={`nav-${title}`}>
              <p
                className="rounded-sm px-3 py-2 text-sm font-light uppercase leading-none tracking-widest
                 transition-colors hover:bg-gray-600/10 hover:dark:bg-gray-50/10"
                title={title}
              >
                {title}
              </p>
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
