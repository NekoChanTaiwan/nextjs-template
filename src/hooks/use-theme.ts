import { useTheme as _useTheme } from 'next-themes'

export function useTheme() {
  const { resolvedTheme, setTheme } = _useTheme()

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return {
    theme: resolvedTheme,
    isDark,
    isLight: !isDark,
    toggleTheme,
  }
}
