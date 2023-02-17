import { useRouter } from "next/router";
import { SideNavbar } from "./SideNavbar";

const Navbar: React.FC = ({}) => {
  const router = useRouter();
  let pathname = router.pathname;
  if (pathname.includes("/work/")) {
    pathname = "/work";
  }

  return (
    <>
      <SideNavbar pathname={pathname} />
    </>
  );

  // return (
  //   <aside className="sticky -mx-4 -mt-4 h-[100vh]  pt-8 md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
  //     <div className="">
  //       <div className="ml-2 mb-2 flex flex-col items-start space-y-10 px-4 md:ml-[12px] md:mb-8 md:flex-row md:px-0">
  //         <Link href="/" aria-label={SITE_NAME}>
  //           <Logo />
  //         </Link>
  //       </div>
  //       <nav
  //         className="fade relative flex scroll-pr-6 flex-row items-start overflow-scroll px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
  //         id="nav"
  //       >
  //         <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
  //           {NAVBAR_ITEMS[pathname] && (
  //             <>
  //               {/* Desktop version, hidden on mobile, animates y axis */}
  //               <div className="hidden md:block">
  //                 <motion.div
  //                   className="z-[5] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
  //                   layoutId="nav-box-2"
  //                   initial={{ opacity: 0, y: NAVBAR_ITEMS[pathname]?.y }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: NAVBAR_ITEMS[pathname]?.y,
  //                     width: NAVBAR_ITEMS[pathname]?.w,
  //                   }}
  //                   transition={{
  //                     type: "spring",
  //                     stiffness: 350,
  //                     damping: 30,
  //                   }}
  //                 />
  //               </div>
  //               {/* Mobile version, hidden on desktop, animates x axis */}
  //               <div className="block md:hidden">
  //                 <motion.div
  //                   className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
  //                   layoutId="nav-box"
  //                   initial={{ opacity: 0, x: NAVBAR_ITEMS[pathname]?.x }}
  //                   animate={{
  //                     opacity: 1,
  //                     x: NAVBAR_ITEMS[pathname]?.x,
  //                     width: NAVBAR_ITEMS[pathname]?.w,
  //                   }}
  //                   transition={{
  //                     type: "spring",
  //                     stiffness: 350,
  //                     damping: 30,
  //                   }}
  //                 />
  //               </div>
  //             </>
  //           )}

  //           {Object.entries(NAVBAR_ITEMS).map(([path, { title }]) => {
  //             const isActive = path === pathname;

  //             return (
  //               <Link
  //                 key={path}
  //                 href={path}
  //                 aria-label={title}
  //                 title={title}
  //                 className={clsx(
  //                   "rounded-sm py-2 pl-3 pr-[11px]",
  //                   "text-sm font-medium uppercase leading-none tracking-wide",
  //                   "transition-colors",
  //                   { "text-primary": isActive }
  //                 )}
  //               >
  //                 {title}
  //               </Link>
  //             );
  //           })}
  //         </div>
  //       </nav>
  //     </div>
  //   </aside>
  // );

  // return (
  //   <header className="relative z-20 flex w-full justify-center py-6">
  //     <div className="container flex items-center justify-between">
  //       <div className="flex">
  //         <div className="mr-2">
  //           <Link href={"/"} title={SITE_NAME} passHref>
  //             <div className="mt-[5px] h-[23px]">
  //               <Logo />
  //             </div>
  //           </Link>
  //         </div>
  //         <nav className="hidden items-center space-x-1 md:flex">
  //           {NAVBAR_ITEMS.map(({ title, route }) => {
  //             const isActive = route === router.pathname;

  //             return (
  //               <Link href={route} passHref key={`nav-${title}`}>
  //                 <p
  //                   className={clsx(
  //                     "rounded-sm py-2 pl-3 pr-[11px]",
  //                     "text-sm font-medium uppercase leading-none tracking-wide",
  //                     "transition-colors",
  //                     isActive ? "text-primary" : "hover:bg-ghost"
  //                   )}
  //                   title={title}
  //                 >
  //                   {title}
  //                 </p>
  //               </Link>
  //             );
  //           })}
  //         </nav>
  //       </div>
  //       <div className="hidden md:block">
  //         <ThemeToggle />
  //       </div>
  //       <div className="block md:hidden">
  //         <NavDrawer />
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Navbar;
