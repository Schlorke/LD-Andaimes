import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Jost, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/lib/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
// import LenisProvider from '@/lib/lenis-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LD Andaimes - Locação e Venda de Andaimes em Porto Alegre',
  description:
    'Soluções completas em andaimes e escoramentos para construção civil. Mais de 10 anos de experiência garantindo segurança, qualidade e eficiência em Porto Alegre/RS.',
  keywords:
    'andaimes, escoramentos, construção civil, Porto Alegre, locação andaimes, segurança obras',
  authors: [{ name: 'LD Andaimes' }],
  creator: 'LD Andaimes',
  publisher: 'LD Andaimes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ldandaimes.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LD Andaimes - Soluções em Andaimes e Escoramentos',
    description:
      'Locação e venda de andaimes com segurança e qualidade garantidas. Atendemos Porto Alegre e região.',
    url: 'https://ldandaimes.com.br',
    siteName: 'LD Andaimes',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LD Andaimes - Soluções em Andaimes',
    description:
      'Locação e venda de andaimes com segurança e qualidade garantidas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jost.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 pt-20">{children}</main>
              <Footer />
            </div>
            <WhatsAppFloat />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
