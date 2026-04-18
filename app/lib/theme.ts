export type UserTheme = 'light' | 'dark' | 'system'
export type AppTheme = Exclude<UserTheme, 'system'>

const STORAGE_KEY = 'theme'
const THEMES: UserTheme[] = ['light', 'dark', 'system']

export function getStoredUserTheme(): UserTheme {
  if (typeof window === 'undefined') return 'system'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored && THEMES.includes(stored as UserTheme)
      ? (stored as UserTheme)
      : 'system'
  } catch {
    return 'system'
  }
}

export function setStoredTheme(theme: UserTheme): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {}
}

export function getSystemTheme(): AppTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function resolveAppTheme(userTheme: UserTheme): AppTheme {
  return userTheme === 'system' ? getSystemTheme() : userTheme
}

export function applyThemeToDOM(userTheme: UserTheme): void {
  const root = document.documentElement
  root.classList.remove('light', 'dark', 'system')
  const resolved = resolveAppTheme(userTheme)
  root.classList.add(resolved)
  if (userTheme === 'system') {
    root.classList.add('system')
  }
}

// Inline script that runs before hydration to prevent FOUC.
// Written as a real function for IDE support, then stringified into an IIFE.
const themeInitFn = () => {
  try {
    const stored = localStorage.getItem('theme') || 'system'
    const valid = ['light', 'dark', 'system'].includes(stored)
      ? stored
      : 'system'
    if (valid === 'system') {
      const sys = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      document.documentElement.classList.add(sys, 'system')
    } else {
      document.documentElement.classList.add(valid)
    }
  } catch {
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    document.documentElement.classList.add(sys, 'system')
  }
}

export const themeScript = `(${themeInitFn.toString()})();`
