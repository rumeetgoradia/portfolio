import { NAVBAR_ITEMS } from "@/constants/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "../Logo";

type SideNavbarProps = {
  pathname: string;
};

const SideNavbar: React.FC<SideNavbarProps> = ({ pathname }) => {
  const navItem = NAVBAR_ITEMS[pathname];
  return (
    <aside className="sticky top-0 mt-12 py-8">
      <div className="mb-8">
        <Link href="/">
          <Logo height={32} />
        </Link>
      </div>
      <nav className="relative flex flex-col items-start gap-2">
        {navItem && (
          <motion.div
            className="absolute -left-[2px] -top-[2px] z-[-1] h-[30px] rounded-sm bg-ghost"
            layoutId="test2"
            initial={{ opacity: 0, y: navItem.y }}
            animate={{
              opacity: 1,
              y: navItem.y,
              width: navItem.w,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}

        {Object.entries(NAVBAR_ITEMS).map(([path, { title, externalPath }]) => {
          const isActive = path === pathname;

          return (
            <Link
              href={externalPath || path}
              passHref
              className={clsx(
                "relative z-[1] -ml-[2px] inline p-1.5",
                "text-sm font-semibold uppercase leading-none tracking-wide",
                "transition-[color,opacity]",
                isActive
                  ? "text-primary"
                  : "text-current opacity-50 hover:opacity-100"
              )}
              target={externalPath ? "_blank" : ""}
              rel={externalPath ? "noreferrer noopener" : ""}
              key={`nav-${title}`}
              title={title}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideNavbar;
