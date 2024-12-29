interface Route {
  title: string;
  href: string;
  isExternal?: boolean;
}

export const ROUTES: Route[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const SECONDARY_ROUTES: Route[] = [
  {
    title: "Resume",
    href: "/resume",
    isExternal: true,
  },
  {
    title: "GitHub",
    href: "https://github.com/rumeetgoradia",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rgoradia/",
    isExternal: true,
  },
  {
    title: "Email",
    href: "mailto:rumeet.goradia@gmail.com",
    isExternal: true,
  },
];
