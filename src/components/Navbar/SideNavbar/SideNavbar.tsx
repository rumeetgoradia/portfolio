import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/seo";
import clsx from "clsx";
import Link from "next/link";
import { Logo } from "../Logo";

type SideNavbarProps = {
  pathname: string;
};

const SideNavbar: React.FC<SideNavbarProps> = ({ pathname }) => {
  return (
    <aside className="sticky top-0 mt-12 hidden flex-col items-start justify-start gap-8 py-8 lg:flex">
      <div>
        <Link href="/" title={SITE_NAME}>
          <Logo height={32} />
        </Link>
      </div>
      <nav className="relative flex flex-grow flex-col items-start gap-2">
        {Object.entries(NAV_ITEMS).map(([path, { title, externalPath }]) => {
          const isActive = path === pathname;

          return (
            <Link
              href={externalPath || path}
              passHref
              scroll
              className={clsx(
                "transition-[color, opacity, background-color] relative z-[1] -ml-[2px] inline rounded-sm p-1.5 text-sm font-semibold uppercase leading-none tracking-wide text-current",
                isActive
                  ? "bg-content/10 opacity-100"
                  : "opacity-50 hover:bg-content/20 hover:opacity-100"
              )}
              target={externalPath ? "_blank" : undefined}
              rel={externalPath ? "noreferrer noopener" : undefined}
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
