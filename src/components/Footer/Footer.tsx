import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { NowPlaying } from "./NowPlaying";

const Footer: React.FC = ({}) => {
  return (
    // Adding minH because skeleton vs actual content causes shift
    <footer className="flex min-h-[105px] w-full flex-col gap-6 border-t-[1px] border-t-content/30 pt-8 transition-[border-color]">
      <div className="flex w-full justify-between gap-4">
        <NowPlaying />
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 pb-8 sm:grid-cols-4 lg:hidden">
        {Object.entries(NAV_ITEMS).map(([path, { title, externalPath }]) => (
          <div key={`footer-link-${path}`}>
            <Link
              href={externalPath || path}
              title={title}
              className="p-1 opacity-50 transition-[opacity] hover:opacity-80"
              target={externalPath ? "_blank" : undefined}
              rel={externalPath ? "noreferrer noopener" : undefined}
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
