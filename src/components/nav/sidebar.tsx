"use client";

import Link from "next/link";
import Logo from "~/components/nav/logo";
import { ROUTES, SECONDARY_ROUTES } from "~/routes";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import {ExternalLink} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 mt-8 flex flex-col space-y-6 pt-12">
      <Link href="/" title="Rumeet Goradia">
        <Logo height={32} />
      </Link>
      <nav className="relative flex flex-grow flex-col items-start space-y-1.5">
        {[...ROUTES, ...SECONDARY_ROUTES].map((route) => {
          const isActive = pathname === route.href;
            return (
              <Link
                href={route.href}
                key={route.href}
                title={route.title}
                target={route.isExternal ? "_blank" : undefined}
                rel={route.isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative z-[1] -ml-[2px] inline rounded-sm p-2 text-sm font-semibold uppercase leading-none tracking-wide text-foreground transition-colors",
                  isActive
                    ? "bg-foreground/10 opacity-100"
                    : "opacity-50 hover:bg-foreground/20 hover:opacity-100",
                )}
              >
                <div className="flex gap-2 items-center">
                  {route.title}
                  {route.isExternal && (

                      <ExternalLink width={16} height={16}/>

                  )}
                </div>
              </Link>
            );
        })}
      </nav>
    </aside>
  );
}
