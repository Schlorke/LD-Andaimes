'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b border-orange-100/50 backdrop-blur-md bg-white/95 shadow-lg',
        className
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 relative">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="LD Andaimes Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centralizada */}
        <nav className="hidden absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 md:flex">
          {navigation.map(item => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={e => handleLinkClick(e, item.href)}
                className="group relative text-sm font-medium transition-all duration-300 hover:text-orange-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <ThemeToggle />
          <div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl"
              asChild
            >
              <a href="tel:+5551994647458">
                <Phone className="mr-2 h-4 w-4" />
                (51) 99464-7458
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-2 text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-orange-400"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l border-orange-200/30 bg-gradient-to-br from-white/95 to-orange-50/30 backdrop-blur-md sm:w-[400px] dark:from-gray-900/95 dark:to-orange-900/30"
            >
              <div className="mt-8 flex flex-col space-y-8">
                {navigation.map(item => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="transform text-xl font-semibold text-gray-800 transition-all duration-300 hover:translate-x-2 hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400"
                      onClick={e => handleLinkClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div className="border-t border-orange-200 pt-8 dark:border-orange-800">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white shadow-lg hover:from-orange-600 hover:to-orange-700"
                    asChild
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
    </header>
  );
}
