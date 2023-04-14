import { Logo } from "@/components/Navbar/Logo";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/seo";
import clsx from "clsx";
import Link from "next/link";
type TopNavbarProps = {
  pathname: string;
};

const TopNavbar: React.FC<TopNavbarProps> = ({ pathname }) => {
  return (
    <header className="flex w-full flex-col items-start gap-4 pb-4 pt-8 sm:flex-row sm:justify-between lg:hidden">
      <div className="sm:mt-[5px]">
        <Link href="/" title={SITE_NAME}>
          <Logo height={24} />
        </Link>
      </div>
      <nav className="flex w-full justify-between sm:-mr-2 sm:w-auto sm:justify-start sm:gap-4">
        {Object.entries(NAV_ITEMS)
          .filter(([_, { isPrimary }]) => isPrimary)
          .map(([path, { title, externalPath }]) => {
            const isActive = path === pathname;

            return (
              <Link
                href={externalPath || path}
                passHref
                scroll
                className={clsx(
                  "relative z-[1] -ml-[2px] inline rounded-sm p-2 text-sm font-semibold uppercase leading-none tracking-wide text-current transition-[color,opacity,background-color]",
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
    </header>
  );
};

export default TopNavbar;
