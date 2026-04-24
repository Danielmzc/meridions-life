"use client"

import { Phone } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappNumber = "5513981708661"
  const whatsappMessage = encodeURIComponent("Ola! Gostaria de agendar uma consulta na Meridions Life.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      aria-label="Agendar via WhatsApp"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Agendar consulta
      </span>
    </a>
  )
}
