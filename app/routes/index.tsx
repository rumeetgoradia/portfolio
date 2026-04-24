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
      <main className="mx-auto flex h-dvh w-full max-w-screen-xl items-center px-8 sm:px-12 lg:px-16 xl:px-24">
        <div>
          <h1 className="text-[clamp(2.5rem,_5vw_+_1rem,_6rem)] font-semibold tracking-tight text-foreground">
            Rumeet Goradia
          </h1>
          <div className="mt-3 space-y-1 sm:mt-4 lg:mt-5 xl:mt-6">
            <p className="text-[clamp(1rem,_1.5vw_+_0.5rem,_1.875rem)] leading-snug text-muted-foreground">
              Senior Software Engineer @{" "}
              <strong className="text-primary">Schonfeld</strong>
            </p>
            <p className="text-[clamp(1rem,_1.5vw_+_0.5rem,_1.875rem)] leading-snug text-muted-foreground">
              MS Machine Learning @{" "}
              <strong className="text-primary">Columbia</strong>
            </p>
          </div>
          <nav className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3 lg:mt-8 lg:gap-3.5">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                variant="outline"
                size="sm"
                className="h-9 w-9 px-0 font-semibold tracking-widest active:border-primary! active:text-primary sm:h-7 sm:w-auto sm:px-2.5 sm:text-[10px] lg:h-8 lg:px-3 lg:text-xs xl:h-9 xl:px-3.5 2xl:h-10 2xl:gap-2 2xl:px-4 2xl:text-sm"
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
                  <Icon className="size-4 sm:size-3 lg:size-3.5 xl:size-4 2xl:size-5" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}
