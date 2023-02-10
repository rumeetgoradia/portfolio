export const NAVBAR_ITEMS: {
  [k: string]: {
    title: string;
  } & ({ isPrimary?: never; x?: never } | { isPrimary: true; x: number }) &
    (
      | {
          externalPath: string;
          x?: never;
          y?: never;
          w?: never;
        }
      | { externalPath?: never; y: number; w: string }
    );
} = {
  "/": {
    title: "Home",
    isPrimary: true,
    x: 0,
    y: 0,
    w: "54px",
  },
  "/about": {
    title: "About",
    isPrimary: true,
    x: 0,
    y: 34,
    w: "61px",
  },
  "/work": {
    title: "Work",
    isPrimary: true,
    x: 0,
    y: 68,
    w: "55px",
  },
  "/contact": {
    title: "Contact",
    isPrimary: true,
    x: 0,
    y: 102,
    w: "81px",
  },
  "/resume": {
    title: "Resume",
    externalPath: "/resume",
  },
  "/github": {
    title: "GitHub",
    externalPath: "https://github.com/rumeetgoradia",
  },
  "/linkedin": {
    title: "LinkedIn",
    externalPath: "https://www.linkedin.com/in/rgoradia/",
  },
  "/email": {
    title: "Email",
    externalPath: "mailto:rumeet.goradia@gmail.com",
  },
};
