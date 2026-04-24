import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-primary/20 bg-white shadow-sm">
              <Image
                src="/meridions-logo.svg"
                alt="Meridions Life"
                width={520}
                height={220}
                className="h-auto w-[150%] max-w-none"
              />
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            {currentYear} Meridions Life. Todos os direitos reservados.
          </p>

          {/* Location */}
          <p className="text-sm text-muted-foreground">
            Baixada Santista
          </p>
        </div>
      </div>
    </footer>
  )
}
