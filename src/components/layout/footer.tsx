import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  produtos: [
    { name: "Andaimes Fachadeiros", href: "/produtos/fachadeiros" },
    { name: "Torres de Serviço", href: "/produtos/torres" },
    { name: "Escoras Metálicas", href: "/produtos/escoras" },
    { name: "Chapas Tapa Vala", href: "/produtos/chapas" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Nossa História", href: "/historia" },
    { name: "Qualidade", href: "/qualidade" },
    { name: "Segurança", href: "/seguranca" },
  ],
  suporte: [
    { name: "Contato", href: "/contato" },
    { name: "Orçamentos", href: "/orcamento" },
    { name: "FAQ", href: "/faq" },
    { name: "Suporte Técnico", href: "/suporte" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">LD</span>
              </div>
              <span className="font-display font-bold text-xl">LD Andaimes</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Soluções completas em andaimes e escoramentos para construção civil. Mais de 10 anos de experiência
              garantindo segurança e qualidade.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com/ldandaimes" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-300 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-300 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p className="text-neutral-300">(51) 3276-3836</p>
                  <p className="text-neutral-300">(51) 3276-1982</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href="mailto:comercial@ldandaimes.com.br"
                  className="text-sm text-neutral-300 hover:text-primary transition-colors"
                >
                  comercial@ldandaimes.com.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <p className="text-sm text-neutral-300">
                  Rua Sr. do Bom Fim, 540
                  <br />
                  Sarandi, Porto Alegre/RS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">© 2025 LD Andaimes. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="text-neutral-400 hover:text-primary text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-neutral-400 hover:text-primary text-sm transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
