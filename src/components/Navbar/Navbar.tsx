import { useRouter } from "next/router";
import { SideNavbar } from "./SideNavbar";
import { TopNavbar } from "./TopNavbar";

const Navbar: React.FC = ({}) => {
  const router = useRouter();

  const getPathname = () => {
    let pathname = router.pathname;
    if (pathname.includes("/work/")) {
      pathname = "/work";
    }
    return pathname;
  };
  return (
    <>
      <TopNavbar pathname={getPathname()} />
      <SideNavbar pathname={getPathname()} />
    </>
  );
};

export default Navbar;
