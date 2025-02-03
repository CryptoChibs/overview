"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2.5 hover:bg-black/[.05] dark:hover:bg-white/[.05]"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

