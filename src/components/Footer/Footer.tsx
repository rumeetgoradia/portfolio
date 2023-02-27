import { ThemeToggle } from "../ThemeToggle";
import { NowPlaying } from "./NowPlaying";

const Footer: React.FC = ({}) => {
  return (
    <footer className="flex w-full justify-between border-t-[1px] border-t-ghost p-8 transition-colors">
      <NowPlaying />
      <div>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
