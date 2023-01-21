import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_DRAWER_ITEMS } from "@/constants/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const NavDrawer: React.FC = ({}) => {
  const router = useRouter();

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "unset";
    }
  }, [isDrawerOpen]);

  return (
    <>
      <div className="h-[34px]">
        <button
          onClick={toggleDrawer}
          className="flex items-center justify-center rounded-sm p-1 text-2xl transition-colors"
          aria-label="Open navigation menu"
          title="Open navigation menu"
        >
          <IoIosMenu />
        </button>
      </div>

      <div
        id="overlay"
        className={clsx(
          "absolute inset-0 z-[14] h-[100vh] w-[100vw] cursor-pointer bg-background/90 backdrop-blur-sm backdrop-saturate-150 transition-[opacity,background-color]",
          isDrawerOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={closeDrawer}
      />
      <div
        className={clsx(
          "flex flex-col items-center gap-6",
          "absolute top-0 right-0 z-[15]",
          "h-[100vh] w-80 px-8 py-6",
          "text-base-content bg-background/90 backdrop-blur-sm backdrop-saturate-150",
          "transition-[backdrop-filter,background-color,transform]",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-[34px] w-full justify-between">
          <ThemeToggle />
          <button
            className="flex items-center justify-center rounded-sm py-1 text-3xl transition-colors"
            aria-label="Close navigation menu"
            title="Close navigation menu"
            onClick={closeDrawer}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="flex w-full flex-grow flex-col gap-2">
          {/* TODO figure out isExternal */}
          {NAV_DRAWER_ITEMS.map(({ title, route, isExternal }) => {
            const isActive = route === router.pathname;

            return (
              <Link href={route} passHref key={`nav-drawer-${title}`}>
                <div
                  onClick={closeDrawer}
                  className={clsx(
                    "py-4 text-right text-lg font-light leading-none",
                    "border-b border-b-ghost",
                    "transition-colors",
                    isActive
                      ? "!border-b-primary !text-primary"
                      : "hover:border-b-content"
                  )}
                  title={title}
                >
                  {title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavDrawer;
