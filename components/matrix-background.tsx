"use client"

import { useEffect, useRef } from "react"

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars =
      "BENRTCObn369MW@#$%^&*<>アイウエオカキクケコサシスセソタチツテト"
    const fontSize = 16
    let drops: number[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initDrops() {
      if (!canvas) return
      const columns = Math.floor(canvas.width / fontSize)
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * -50),
      )
    }

    resize()
    initDrops()

    function drawMatrix() {
      if (!canvas || !ctx) return
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const bright = Math.random() > 0.95
        const neonColor = document.documentElement.classList.contains("neon-pink")
          ? "#ff2bd6"
          : "#39FF14"
        ctx.fillStyle = bright ? "#ffffff" : neonColor
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const intervalId = window.setInterval(drawMatrix, 33)

    function handleResize() {
      resize()
      initDrops()
    }
    window.addEventListener("resize", handleResize)

    // Glitch no background nas frequências fixas
    const backgroundGlitchTimings = [3000, 12000, 18000, 33000]
    const glitchTimeouts: number[] = []

    function triggerBackgroundGlitch() {
      if (!canvas) return
      canvas.classList.add("matrix-glitch-active")
      window.setTimeout(
        () => canvas.classList.remove("matrix-glitch-active"),
        150,
      )
    }

    backgroundGlitchTimings.forEach((time) => {
      glitchTimeouts.push(window.setTimeout(triggerBackgroundGlitch, time))
    })

    return () => {
      window.clearInterval(intervalId)
      window.removeEventListener("resize", handleResize)
      glitchTimeouts.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
