import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/seo";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosMenu } from "react-icons/io";
import { ThemeToggle } from "../ThemeToggle";
import { Logo } from "./Logo";

const Navbar: React.FC = ({}) => {
  const router = useRouter();

  return (
    <header className="relative z-10 flex w-full justify-center py-6">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <div className="mr-2">
            <Link href={"/"} title={SITE_NAME} passHref>
              <div className="mt-[5px] h-[23px]">
                <Logo />
              </div>
            </Link>
          </div>
          <nav className="hidden items-center space-x-1 md:flex">
            {NAV_ITEMS.map(({ title, route }) => {
              const isActive = route === router.pathname;

              return (
                <Link href={route} passHref key={`nav-${title}`}>
                  <p
                    className={clsx(
                      "rounded-sm py-2 pl-3 pr-[11px]",
                      "text-sm font-medium uppercase leading-none tracking-wide",
                      "transition-colors",
                      isActive ? "text-primary" : "hover:bg-ghost"
                    )}
                    title={title}
                  >
                    {title}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="block h-[34px] md:hidden">
          <label
            htmlFor="drawer"
            className="btn-ghost btn-sm btn rounded-sm p-1 text-2xl "
            aria-label="Open navigation menu"
            title="Open navigation menu"
          >
            <IoIosMenu />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
