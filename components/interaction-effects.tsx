"use client"

import { useEffect } from "react"

export function InteractionEffects() {
  useEffect(() => {
    let resetTimeout: number | undefined
    const root = document.documentElement

    function triggerInteraction() {
      root.classList.add("neon-pink", "interaction-glitch-active")
      window.clearTimeout(resetTimeout)
      resetTimeout = window.setTimeout(() => {
        root.classList.remove("neon-pink", "interaction-glitch-active")
      }, 420)
    }

    document.addEventListener("pointerdown", triggerInteraction, { passive: true })
    window.addEventListener("scroll", triggerInteraction, { passive: true })

    return () => {
      document.removeEventListener("pointerdown", triggerInteraction)
      window.removeEventListener("scroll", triggerInteraction)
      window.clearTimeout(resetTimeout)
      root.classList.remove("neon-pink", "interaction-glitch-active")
    }
  }, [])

  return null
}
