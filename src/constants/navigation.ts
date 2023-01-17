type NavItem = {
  title: string;
  route: string;
  isExternal?: boolean;
};

export const NAVBAR_ITEMS: NavItem[] = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Work",
    route: "/work",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

export const NAV_DRAWER_ITEMS: NavItem[] = [
  {
    title: "Home",
    route: "/",
  },
  ...NAVBAR_ITEMS,
  {
    title: "Resume",
    route: "/resume",
    isExternal: true,
  },
  {
    title: "GitHub",
    route: "https://github.com/rumeetgoradia",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    route: "https://www.linkedin.com/in/rgoradia/",
    isExternal: true,
  },
  {
    title: "Email",
    route: "mailto:rumeet.goradia@gmail.com",
    isExternal: true,
  },
];
