'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Andaimes', href: '#portfolio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '/contato' },
];

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 10px 30px rgba(0, 0, 0, 0.1)']
  );

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={cn(
        'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-orange-100/50 backdrop-blur-md',
        className
      )}
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="LD Andaimes Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={e => handleLinkClick(e, item.href)}
                className="group relative text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-orange-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700"
            >
              <a href="tel:+5551994647458">
                <Phone className="mr-2 h-4 w-4" />
                (51) 99464-7458
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-gradient-to-br from-white to-orange-50/30 backdrop-blur-md sm:w-[400px]"
            >
              <div className="mt-8 flex flex-col space-y-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium transition-all duration-300 hover:translate-x-2 hover:text-orange-600"
                      onClick={e => handleLinkClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-orange-100 pt-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:from-orange-600 hover:to-orange-700"
                  >
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
  );
}
