"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Patricia Mendes",
    condition: "Ansiedade",
    text: "Depois de anos sofrendo com crises de ansiedade, encontrei na acupuntura um tratamento que realmente funciona. Minha qualidade de vida melhorou muito.",
    rating: 5
  },
  {
    name: "Roberto Almeida",
    condition: "Dor Crônica",
    text: "Tinha dores nas costas há mais de 10 anos. Após algumas sessões, já senti uma melhora significativa. Hoje vivo praticamente sem dor.",
    rating: 5
  },
  {
    name: "Lucia Ferreira",
    condition: "Insônia",
    text: "Não conseguia dormir direito há meses. O tratamento na Meridions Life me devolveu noites de sono tranquilo. Recomendo muito!",
    rating: 5
  },
  {
    name: "Fernando Costa",
    condition: "Enxaqueca",
    text: "Sofria com enxaquecas semanais. Hoje, após o tratamento, as crises diminuíram drasticamente. Uma mudança incrível na minha vida.",
    rating: 5
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-muted/25">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2 font-[family-name:var(--font-playfair)]">
            Histórias de transformação
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Relatos de quem encontrou mais equilíbrio, descanso e bem-estar com os tratamentos.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card/85 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Testimonial text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
