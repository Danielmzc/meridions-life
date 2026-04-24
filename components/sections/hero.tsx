"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Heart, Leaf, MessageCircle, Sparkles } from "lucide-react"

export function HeroSection() {
  const whatsappNumber = "5513981708661"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta na Meridions Life.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,var(--background)_0%,oklch(0.985_0.014_98)_48%,oklch(0.95_0.028_138)_100%)]">
      <svg
        className="pointer-events-none absolute inset-x-0 top-16 h-[72%] w-full text-primary/10"
        viewBox="0 0 1200 620"
        fill="none"
        aria-hidden="true"
      >
        <path d="M-80 390C120 250 240 470 430 315C625 156 755 308 940 188C1060 110 1162 118 1275 176" stroke="currentColor" strokeWidth="2" />
        <path d="M-60 470C125 325 270 528 465 382C685 216 810 395 1020 260C1135 186 1222 206 1300 274" stroke="currentColor" strokeWidth="1.4" />
      </svg>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-28 md:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <Leaf className="h-4 w-4" />
              <span>Medicina Tradicional Chinesa na Baixada Santista</span>
            </div>

            <h1 className="mb-6 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-normal text-foreground md:text-6xl lg:text-7xl">
              Um cuidado leve para o corpo voltar a respirar.
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl lg:mx-0">
              Acupuntura, auriculoterapia e terapias integrativas para aliviar dores, ansiedade,
              estresse e desequilíbrios do dia a dia com escuta, técnica e presença.
            </p>

            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full px-8 text-base shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-primary/20 bg-white/60 px-8 text-base backdrop-blur hover:bg-white"
                asChild
              >
                <a href="#servicos">Ver tratamentos</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-left sm:max-w-xl">
              <div className="rounded-2xl border border-primary/10 bg-white/65 p-4 shadow-sm backdrop-blur">
                <Heart className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">+500</p>
                <p className="text-xs leading-relaxed text-muted-foreground">pacientes atendidos</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-white/65 p-4 shadow-sm backdrop-blur">
                <Sparkles className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">10+ anos</p>
                <p className="text-xs leading-relaxed text-muted-foreground">de experiência</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-white/65 p-4 shadow-sm backdrop-blur">
                <Leaf className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Natural</p>
                <p className="text-xs leading-relaxed text-muted-foreground">cuidado integrativo</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center lg:max-w-[500px]">
            <span className="logo-ripple absolute inset-[5%] rounded-full border border-primary/20" aria-hidden="true" />
            <span className="logo-ripple logo-ripple-delay absolute inset-[5%] rounded-full border border-accent/25" aria-hidden="true" />
            <span className="logo-ripple logo-ripple-delay-long absolute inset-[5%] rounded-full border border-primary/15" aria-hidden="true" />
            <div className="absolute inset-8 rounded-full border border-primary/10" />
            <div className="absolute inset-0 rounded-full border border-accent/25" />
            <div className="relative flex aspect-square w-[82%] items-center justify-center rounded-full border border-primary/15 bg-white/80 p-8 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-full border border-primary/20 bg-white">
                <Image
                  src="/meridions-logo.svg"
                  alt="Meridions Life"
                  width={520}
                  height={220}
                  className="h-auto w-[150%] max-w-none"
                  priority
                />
              </div>
            </div>

            <div className="absolute -left-2 top-12 rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 text-sm shadow-lg shadow-primary/10 backdrop-blur">
              <p className="font-medium text-foreground">Escuta individual</p>
              <p className="text-xs text-muted-foreground">cada sessão no seu ritmo</p>
            </div>
            <div className="absolute -right-2 bottom-14 rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 text-sm shadow-lg shadow-primary/10 backdrop-blur">
              <p className="font-medium text-foreground">Qi em equilíbrio</p>
              <p className="text-xs text-muted-foreground">presença, alívio e leveza</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
