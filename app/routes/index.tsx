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
      <main className="flex min-h-screen items-center justify-center px-6 py-16">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground xl:text-6xl 2xl:text-7xl">
            Rumeet Goradia
          </h1>
          <div className="mt-2 space-y-px xl:mt-3 2xl:mt-4">
            <p className="text-lg leading-snug text-muted-foreground xl:text-xl 2xl:text-2xl">
              Senior Software Engineer @ <strong>Schonfeld</strong>
            </p>
            <p className="text-lg leading-snug text-muted-foreground xl:text-xl 2xl:text-2xl">
              MS Machine Learning @ <strong>Columbia</strong>
            </p>
          </div>
          <nav className="mt-3 flex flex-wrap gap-2 xl:mt-4 xl:gap-2.5 2xl:mt-5 2xl:gap-3">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                variant="outline"
                size="sm"
                className="text-[10px] font-semibold tracking-widest active:text-primary active:border-primary! xl:text-xs xl:h-8 xl:px-3 2xl:text-sm 2xl:h-9 2xl:px-4 2xl:gap-2"
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
                  <Icon className="size-3 xl:size-3.5 2xl:size-4" />
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
