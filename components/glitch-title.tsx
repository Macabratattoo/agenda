"use client"

import { useEffect, useRef } from "react"

export function GlitchTitle() {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    let removeTimeout: number
    let nextTimeout: number

    function triggerRandomTextGlitch() {
      const el = h1Ref.current
      if (el) {
        el.classList.add("glitch-text-active")
        removeTimeout = window.setTimeout(() => {
          el.classList.remove("glitch-text-active")
        }, 400)
      }
      const nextGlitchDelay =
        Math.floor(Math.random() * (12000 - 4000 + 1)) + 4000
      nextTimeout = window.setTimeout(triggerRandomTextGlitch, nextGlitchDelay)
    }

    const startTimeout = window.setTimeout(triggerRandomTextGlitch, 2500)

    return () => {
      window.clearTimeout(startTimeout)
      window.clearTimeout(removeTimeout)
      window.clearTimeout(nextTimeout)
    }
  }, [])

  return (
    <div className="relative z-10 mb-2 text-center">
      <h1
        ref={h1Ref}
        className="neon-control m-0 mb-1 inline-block text-balance text-[clamp(18px,2.5vw,28px)] font-bold uppercase tracking-[4px] text-white [text-shadow:0_0_8px_#39FF14]"
      >
        Artista Bene Bertocco
      </h1>
      <p className="m-0 text-[clamp(11px,1.3vw,14px)] text-neutral-300">
        Seja bem vindo, será um prazer imenso poder lhe atender
      </p>
    </div>
  )
}
