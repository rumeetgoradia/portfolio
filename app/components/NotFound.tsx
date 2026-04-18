import type { ReactNode } from "react";

import { Link } from "@tanstack/react-router";

export function NotFound({ children }: Readonly<{ children?: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <div className="text-zinc-600 dark:text-zinc-400">
        {children ?? <p>The page you are looking for does not exist.</p>}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium dark:border-zinc-700"
          onClick={() => window.history.back()}
          type="button"
        >
          Go back
        </button>
        <Link
          className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
