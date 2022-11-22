import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/seo";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        "fixed top-0 left-0 right-0 flex w-full justify-center py-8 md:py-10",
        "bg-white/90 backdrop-blur-sm backdrop-saturate-150 dark:bg-black/90",
        "transition-[backdrop-filter,background-color]",
        !isScrolled &&
          "md:!bg-transparent md:backdrop-blur-none md:backdrop-saturate-100"
      )}
    >
      <div className="container flex justify-between">
        <div className="flex items-center space-x-4">
          <Link href={"/"} title={SITE_NAME} passHref>
            <Logo />
          </Link>
          {NAV_ITEMS.map(({ title, route }) => (
            <Link href={route} passHref key={`nav-${title}`}>
              <p className="text-sm font-bold uppercase tracking-wider">
                {title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
