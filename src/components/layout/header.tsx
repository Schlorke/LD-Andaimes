"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "#produtos" },
  { name: "Andaimes", href: "#portfolio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "/contato" },
]

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const headerBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"])
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 10px 30px rgba(0, 0, 0, 0.1)"],
  )

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-primary-100/50 backdrop-blur-md shadow-card-3d bg-white/80 dark:bg-gray-900/80",
        className,
      )}
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LD Andaimes Logo" width={160} height={45} className="h-12 w-auto" priority />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-10 md:flex">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group relative text-base font-semibold transition-all duration-300 hover:scale-105 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 text-gray-800"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full shadow-sm"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <ThemeToggle />
          <Button size="lg" asChild>
            <a href="tel:+5551994647458">
              <Phone className="mr-2 h-4 w-4" />
              (51) 99464-7458
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-gradient-to-br from-white to-primary-50/30 backdrop-blur-md sm:w-[400px] dark:from-gray-900 dark:to-primary-900/30"
            >
              <div className="mt-8 flex flex-col space-y-8">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-xl font-semibold transition-all duration-300 hover:translate-x-2 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 text-gray-800"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-primary-100 pt-8 dark:border-primary-800">
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+5551994647458">
                      <Phone className="mr-2 h-4 w-4" />
                      (51) 99464-7458
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
