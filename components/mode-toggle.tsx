"use client"

import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2.5 hover:bg-black/[.05] dark:hover:bg-white/[.05]"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

