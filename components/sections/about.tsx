"use client"

import { Check } from "lucide-react"

const conditions = [
  "Dores crônicas e agudas",
  "Ansiedade e depressão",
  "Insônia e distúrbios do sono",
  "Enxaquecas e cefaleia",
  "Problemas digestivos",
  "Fibromialgia",
  "Artrite e artrose",
  "Estresse e tensão muscular",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Circulo decorativo */}
              <div className="absolute inset-0 rounded-full border border-primary/10 bg-[linear-gradient(140deg,oklch(0.98_0.012_95),oklch(0.94_0.032_140))]" />
              <div className="absolute inset-4 rounded-full border border-accent/25 bg-white/45" />
              
              {/* Icone central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 bg-card rounded-full shadow-xl shadow-primary/10 flex items-center justify-center border border-primary/10">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-20 h-20 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {/* Corpo estilizado com meridianos */}
                    <ellipse cx="50" cy="30" rx="12" ry="14" />
                    <path d="M50 44 L50 75" />
                    <path d="M50 50 L30 65" />
                    <path d="M50 50 L70 65" />
                    <path d="M50 75 L35 95" />
                    <path d="M50 75 L65 95" />
                    {/* Pontos de acupuntura */}
                    <circle cx="50" cy="30" r="2" fill="currentColor" />
                    <circle cx="50" cy="50" r="2" fill="currentColor" />
                    <circle cx="40" cy="58" r="2" fill="currentColor" />
                    <circle cx="60" cy="58" r="2" fill="currentColor" />
                    <circle cx="50" cy="65" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Elementos flutuantes */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">Qi</span>
              </div>
              <div className="absolute bottom-12 left-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xs text-center text-foreground font-medium leading-tight">Yin<br/>Yang</span>
              </div>
            </div>
          </div>

          {/* Conteudo */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-2 font-[family-name:var(--font-playfair)]">
              Técnica com calma. Cuidado com presença.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A acupuntura é uma técnica milenar da Medicina Tradicional Chinesa que utiliza
              agulhas finas em pontos específicos do corpo para restaurar o equilíbrio energético
              e promover a cura natural.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Na Meridions Life, o atendimento une conhecimento ancestral, escuta individual e
              uma condução tranquila para que cada sessão faça sentido para o seu momento.
            </p>

            {/* Lista de condicoes tratadas */}
            <h3 className="font-semibold text-foreground mb-4">Condições que tratamos:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
