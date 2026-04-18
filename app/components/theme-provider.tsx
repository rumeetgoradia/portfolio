import { createContext, use, useEffect, useState, type ReactNode } from 'react'
import { ScriptOnce } from '@tanstack/react-router'

import {
  applyThemeToDOM,
  getStoredUserTheme,
  getSystemTheme,
  resolveAppTheme,
  setStoredTheme,
  themeScript,
  type AppTheme,
  type UserTheme,
} from '@/lib/theme'

type ThemeContextValue = {
  userTheme: UserTheme
  appTheme: AppTheme
  setTheme: (theme: UserTheme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [userTheme, setUserTheme] = useState<UserTheme>(getStoredUserTheme)

  useEffect(() => {
    if (userTheme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyThemeToDOM('system')
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [userTheme])

  const appTheme = resolveAppTheme(userTheme)

  function setTheme(newTheme: UserTheme) {
    setUserTheme(newTheme)
    setStoredTheme(newTheme)
    applyThemeToDOM(newTheme)
  }

  return (
    <ThemeContext value={{ userTheme, appTheme, setTheme }}>
      <ScriptOnce children={themeScript} />
      {children}
    </ThemeContext>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = use(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

// Re-export for convenience
export type { AppTheme, UserTheme }
