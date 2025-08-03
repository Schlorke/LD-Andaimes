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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative">
      <div className="container mx-auto py-16 px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 flex h-10 w-10 items-center justify-center rounded-lg shadow-3d">
                <span className="text-sm font-bold text-white">LD</span>
              </div>
              <span className="font-display text-2xl font-bold text-primary-400">LD Andaimes</span>
            </div>
            <p className="text-base leading-relaxed text-gray-300">
              Soluções completas em andaimes e escoramentos para construção civil. Mais de 10 anos de experiência
              garantindo segurança e qualidade.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary-600/20 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://instagram.com/ldandaimes" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display mb-6 text-xl font-bold text-primary-400">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-all duration-300 hover:text-primary-400 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display mb-6 text-xl font-bold text-primary-400">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-all duration-300 hover:text-primary-400 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display mb-6 text-xl font-bold text-primary-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-primary-400 mt-1 h-5 w-5" />
                <div className="text-sm">
                  <p className="text-gray-300">(51) 3276-3836</p>
                  <p className="text-gray-300">(51) 3276-1982</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-primary-400 mt-1 h-5 w-5" />
                <a
                  href="mailto:comercial@ldandaimes.com.br"
                  className="text-sm text-gray-300 transition-all duration-300 hover:text-primary-400"
                >
                  comercial@ldandaimes.com.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 mt-1 h-5 w-5" />
                <p className="text-sm text-gray-300">
                  Rua Sr. do Bom Fim, 540
                  <br />
                  Sarandi, Porto Alegre/RS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">© 2025 LD Andaimes. Todos os direitos reservados.</p>
          <div className="mt-4 flex space-x-8 md:mt-0">
            <Link
              href="/privacidade"
              className="text-sm text-gray-400 transition-all duration-300 hover:text-primary-400"
            >
              Privacidade
            </Link>
            <Link href="/termos" className="text-sm text-gray-400 transition-all duration-300 hover:text-primary-400">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
