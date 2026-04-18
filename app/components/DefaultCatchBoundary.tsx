import type { ErrorComponentProps } from "@tanstack/react-router";
import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  console.error("DefaultCatchBoundary error:", error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-3">
        <button
          className="rounded-xs bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
          onClick={() => {
            router.invalidate();
          }}
          type="button"
        >
          Try again
        </button>
        {isRoot ? (
          <Link
            className="rounded-xs border border-zinc-300 px-3 py-2 text-sm font-medium dark:border-zinc-700"
            to="/"
          >
            Home
          </Link>
        ) : (
          <button
            className="rounded-xs border border-zinc-300 px-3 py-2 text-sm font-medium dark:border-zinc-700"
            onClick={() => window.history.back()}
            type="button"
          >
            Go back
          </button>
        )}
      </div>
    </div>
  );
}
