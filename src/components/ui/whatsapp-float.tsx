"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WhatsAppChat } from "./whatsapp-chat"
import { motion } from "framer-motion"

interface WhatsAppFloatProps {
  className?: string
  phone?: string
}

export function WhatsAppFloat({ className, phone = "5551994647458" }: WhatsAppFloatProps) {
  const [hasClicked, setHasClicked] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    const clicked = localStorage.getItem("whatsapp-clicked")
    if (!clicked) {
      setHasClicked(false)
    }
  }, [])

  const handleClick = () => {
    if (!hasClicked) {
      localStorage.setItem("whatsapp-clicked", "true")
      setHasClicked(true)
    }
    setIsChatOpen(true)
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 2,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{
          scale: 1.1,
          y: -5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          onClick={handleClick}
          className={cn(
            "h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 backdrop-blur-sm",
            className,
          )}
          aria-label="Abrir chat do WhatsApp"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          >
            <MessageCircle className="h-8 w-8" />
          </motion.div>
          {!hasClicked && (
            <motion.span
              className="absolute -top-1 -right-1 flex h-5 w-5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white justify-center items-center text-xs font-bold">
                1
              </span>
            </motion.span>
          )}
        </Button>
      </motion.div>
      <WhatsAppChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} phone={phone} />
    </>
  )
}
