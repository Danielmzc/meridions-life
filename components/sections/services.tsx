"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Brain, Heart, Flower2, Moon, Flame } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Acupuntura Tradicional",
    description: "Agulhas finas em pontos específicos para equilibrar o fluxo de energia vital (Qi) e aliviar dores crônicas.",
    duration: "50 min"
  },
  {
    icon: Brain,
    title: "Acupuntura para Ansiedade",
    description: "Protocolo específico para reduzir estresse, ansiedade, tensão emocional e melhorar a qualidade do sono.",
    duration: "50 min"
  },
  {
    icon: Heart,
    title: "Auriculoterapia",
    description: "Estimulação de pontos na orelha com sementes ou microagulhas como apoio para diversos tratamentos.",
    duration: "30 min"
  },
  {
    icon: Flower2,
    title: "Ventosaterapia",
    description: "Técnica com ventosas para aliviar tensões musculares, relaxar o corpo e melhorar a circulação sanguínea.",
    duration: "40 min"
  },
  {
    icon: Moon,
    title: "Moxabustão",
    description: "Aplicação de calor em pontos de acupuntura para aquecer, tonificar e fortalecer o organismo.",
    duration: "45 min"
  },
  {
    icon: Flame,
    title: "Medicina Integrativa",
    description: "Consulta completa integrando visão oriental, escuta clínica e um plano de cuidado personalizado.",
    duration: "60 min"
  },
]

const benefits = [
  {
    title: "Tratamento Natural",
    description: "Cuidado gentil, com foco na resposta do seu corpo"
  },
  {
    title: "Resultados Duradouros",
    description: "Olhar para a causa, não apenas para o sintoma"
  },
  {
    title: "Personalizado",
    description: "Cada paciente é único, cada sessão também"
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-muted/25">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Tratamentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2 font-[family-name:var(--font-playfair)]">
            Caminhos de cuidado
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Terapias milenares com condução cuidadosa para restaurar equilíbrio, aliviar desconfortos e trazer mais leveza para a rotina.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    {service.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-background/70 p-6 shadow-sm"
            >
              <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
