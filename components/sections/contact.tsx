"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const whatsappNumber = "5513981708661"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta na Meridions Life.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section id="contato" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-0 bg-[linear-gradient(135deg,oklch(0.43_0.11_145),oklch(0.55_0.10_132))] text-primary-foreground shadow-2xl shadow-primary/15">
            <svg className="absolute inset-0 h-full w-full text-white/10" viewBox="0 0 900 360" fill="none" aria-hidden="true">
              <path d="M-40 220C118 106 240 306 398 184C566 54 674 174 812 86C882 42 944 48 990 72" stroke="currentColor" strokeWidth="2" />
              <path d="M-30 286C130 158 272 340 438 228C612 110 712 240 884 142C952 104 1008 116 1052 148" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-3xl font-bold md:text-4xl">
                  Agende sua consulta
                </h2>
                <p className="mx-auto max-w-lg text-primary-foreground/90 text-pretty">
                  Dê o primeiro passo para uma vida mais equilibrada.
                  Entre em contato e agende sua avaliação inicial.
                </p>
              </div>

              <div className="mb-10 flex justify-center">
                <Button
                  size="lg"
                  className="gap-3 rounded-full bg-white px-10 py-7 text-lg text-primary shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-2xl"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-6 w-6" />
                    Agendar agora
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <Clock className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Horário</p>
                    <p className="text-xs text-primary-foreground/80">Seg a Sex, 8h às 19h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Localização</p>
                    <p className="text-xs text-primary-foreground/80">Baixada Santista</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <Phone className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Telefone</p>
                    <p className="text-xs text-primary-foreground/80">+55 13 98170-8661</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
