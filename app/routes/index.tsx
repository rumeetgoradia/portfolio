import { createFileRoute } from '@tanstack/react-router'

import { ThemeToggle } from '@/components/theme-toggle'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>
      <main className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl">
          <p className="text-sm text-muted-foreground">Baseline scaffold</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Rumeet Goradia
          </h1>
        </div>
      </main>
    </>
  )
}
