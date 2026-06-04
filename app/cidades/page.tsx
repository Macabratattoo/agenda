import Image from "next/image"
import { MatrixBackground } from "@/components/matrix-background"
import { GlitchTitle } from "@/components/glitch-title"

const cidades = [
  {
    nome: "Cascavel",
    periodo: "20/07 - 20/10",
    href: "https://v0-skincrack6.vercel.app/?cidade=Cascavel",
  },
  {
    nome: "Gravataí",
    periodo: "01/06 - 18/07",
    href: "https://v0-skincrack6.vercel.app/?cidade=Gravatai",
  },
  {
    nome: "Baln. Camboriú",
    periodo: "10/11 - 30/03",
    href: "https://v0-skincrack6.vercel.app/?cidade=Camboriu",
  },
]

const socials = [
  { label: "@benebtattoo", href: "https://instagram.com/benebtattoo" },
  { label: "@macabratattoo", href: "https://instagram.com/macabratattoo" },
  { label: "@cy6tattoo", href: "https://instagram.com/cy6tattoo" },
  { label: "WhatsApp", href: "https://wa.me/5547997772172" },
]

export default function CidadesPage() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black text-white">
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

        {/* Logo */}
        <div className="z-10 mt-2 mb-0 md:absolute md:left-8 md:top-6 md:mt-0 md:mb-0">
          <Image
            src="/bene-logo.png"
            alt="Logo Bene Bertocco"
            width={96}
            height={96}
            priority
            className="h-[76px] w-auto md:h-20"
          />
        </div>

        {/* Botões de cidades */}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-5 px-6 py-6">
          <h2 className="mb-2 text-center text-[clamp(13px,1.6vw,16px)] uppercase tracking-[3px] text-neutral-300">
            Selecione a cidade
          </h2>
          {cidades.map((cidade) => (
            <a
              key={cidade.nome}
              href={cidade.href}
              className="flex w-full max-w-sm flex-col items-center gap-1 border border-[#39FF14] bg-black/75 px-6 py-4 text-center uppercase tracking-wide text-[#39FF14] shadow-[0_0_8px_rgba(57,255,20,0.25)] transition-all duration-200 hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_16px_#39FF14]"
            >
              <span className="text-lg font-bold tracking-[2px]">
                {cidade.nome}
              </span>
              <span className="text-sm tracking-[1px] opacity-90">
                {cidade.periodo}
              </span>
            </a>
          ))}
        </div>

        {/* Rodapé de contatos */}
        <div className="z-10 flex w-full flex-wrap justify-center gap-2.5 bg-black/40 px-2.5 py-3 md:px-2.5 md:py-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="border border-[#39FF14] bg-black/75 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#39FF14] shadow-[0_0_6px_rgba(57,255,20,0.2)] transition-all duration-200 hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_12px_#39FF14]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
