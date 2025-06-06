"use client";

import Logo from "~/components/nav/logo";
import Link from "next/link";
import { ROUTES } from "~/routes";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import {Initials} from "~/components/nav/initials";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4">
        <Link href="/" title="Rumeet Goradia">
          <Logo height={24} className='mt-2' />
        </Link>
      <nav className="flex space-x-[6px]">
        {ROUTES.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              href={route.href}
              key={route.href}
              title={route.title}
              className={cn(
                "relative z-[1] -ml-[2px] inline rounded-sm p-[6px] text-sm font-semibold uppercase leading-none tracking-wide text-foreground transition-colors",
                isActive
                  ? "bg-foreground/10 opacity-100"
                  : "opacity-50 hover:bg-foreground/20 hover:opacity-100",
              )}
            >
              {route.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
