import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme, type UserTheme } from "@/components/theme-provider";

const CYCLE: UserTheme[] = ["light", "dark", "system"];

export function ThemeToggle() {
  const { userTheme, setTheme } = useTheme();

  function cycleTheme() {
    const idx = CYCLE.indexOf(userTheme);
    const next = CYCLE[(idx + 1) % CYCLE.length];
    setTheme(next);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="active:text-primary"
      onClick={cycleTheme}
      aria-label="Toggle theme"
    >
      {/* CSS-driven visibility to avoid hydration mismatch on first paint */}
      <Sun className="not-dark:not-system:block hidden size-4" />
      <Moon className="dark:not-system:block hidden size-4" />
      <Monitor className="system:block hidden size-4" />
    </Button>
  );
}
