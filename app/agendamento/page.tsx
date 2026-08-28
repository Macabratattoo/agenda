import Image from "next/image"
import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"
import { GlitchTitle } from "@/components/glitch-title"
import { InteractionEffects } from "@/components/interaction-effects"

const socials = [
  { label: "@benebtattoo", href: "https://instagram.com/benebtattoo" },
  { label: "@macabratattoo", href: "https://instagram.com/macabratattoo" },
  { label: "@cy6tattoo", href: "https://instagram.com/cy6tattoo" },
  { label: "WhatsApp", href: "https://wa.me/5547997772172" },
]

export default function Page() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black text-white">
      <InteractionEffects />

      {/* Fundo Matrix */}
      <MatrixBackground />

      {/* Escurecimento do fundo */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-black/60"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="fixed inset-0 z-[2] flex flex-col items-center pt-3 md:pt-8">
        {/* Título */}
        <GlitchTitle />

        {/* Logo (abaixo do título no mobile, canto superior esquerdo no desktop) */}
        <div className="z-10 mt-2 mb-0 md:absolute md:left-8 md:top-6 md:mt-0 md:mb-0">
          <Link href="/" aria-label="Voltar para seleção de cidades">
            <Image
              src="/bene-logo.png"
              alt="Logo Bene Bertocco"
              width={96}
              height={96}
              priority
              className="h-[76px] w-auto md:h-20"
            />
          </Link>
        </div>

        {/* Formulário Tally */}
        <div className="min-h-0 w-full flex-1 bg-transparent">
          <iframe
            src="https://tally.so/r/2ED4zA?transparentBackground=1"
            title="Formulário de agendamento"
            className="block h-full w-full border-0 bg-transparent"
          />
        </div>

        {/* Rodapé de contatos */}
        <div className="z-10 flex w-full flex-wrap justify-center gap-2.5 bg-black/40 px-2.5 py-3 md:px-2.5 md:py-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="neon-control border border-[#39FF14] bg-black/75 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#39FF14] shadow-[0_0_6px_rgba(57,255,20,0.2)] transition-all duration-200 hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_12px_#39FF14]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
