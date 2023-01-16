import { NAV_ITEMS } from "@/constants/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosClose } from "react-icons/io";

const NavDrawer: React.FC = ({}) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "w-80 px-8 pt-6",
        "bg-base-100/90 text-base-content backdrop-blur-sm backdrop-saturate-150",
        "transition-[backdrop-filter,background-color]"
      )}
    >
      <div className="mb-6 block h-[34px] text-right">
        <label
          htmlFor="drawer"
          className="btn-ghost btn-sm btn rounded-sm p-1 text-2xl"
          aria-label="Close navigation menu"
          title="Close navigation menu"
        >
          <IoIosClose />
        </label>
      </div>
      <ul className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ title, route }) => {
          const isActive = route === router.pathname;

          return (
            <li
              key={`nav-drawer-${title}`}
              className={clsx(
                "btn-ghost btn rounded-sm p-2 transition-colors",
                isActive && "hover:bg-transparent"
              )}
            >
              <Link href={route} passHref>
                <p
                  className={clsx(
                    "",
                    "font-medium uppercase leading-none tracking-wide",
                    "transition-colors",
                    isActive && "text-primary"
                  )}
                  title={title}
                >
                  {title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDrawer;
