import { createFileRoute } from "@tanstack/react-router";
import { FileText, Mail } from "lucide-react";

import { DotGrid } from "@/components/dot-grid";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const LINKS = [
  {
    href: "/Rumeet Goradia Resume.pdf",
    label: "Resume",
    icon: FileText,
  },
  {
    href: "https://github.com/rumeetgoradia",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/rgoradia/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:rumeet.goradia@gmail.com",
    label: "Email",
    icon: Mail,
  },
] as const;

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <DotGrid />
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>
      <main className="flex min-h-dvh items-center justify-center px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Rumeet Goradia
          </h1>
          <div className="mt-2 space-y-px lg:mt-3 xl:mt-4 2xl:mt-5">
            <p className="text-base leading-snug text-muted-foreground sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Senior Software Engineer @{" "}
              <strong className="text-primary">Schonfeld</strong>
            </p>
            <p className="text-base leading-snug text-muted-foreground sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              MS Machine Learning @{" "}
              <strong className="text-primary">Columbia</strong>
            </p>
          </div>
          <nav className="mt-3 flex flex-wrap justify-center gap-2 lg:mt-4 lg:gap-2.5 xl:mt-5 xl:gap-3 2xl:mt-6 2xl:gap-3.5">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                variant="outline"
                size="sm"
                className="text-[10px] font-semibold tracking-widest active:text-primary active:border-primary! lg:text-xs lg:h-8 lg:px-3 xl:h-9 xl:px-3.5 2xl:text-sm 2xl:h-10 2xl:px-4 2xl:gap-2"
                asChild
              >
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <Icon className="size-3 lg:size-3.5 xl:size-4 2xl:size-5" />
                  {label}
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}
