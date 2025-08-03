"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
}

interface WhatsAppChatProps {
  isOpen: boolean
  onClose: () => void
  phone: string
}

export function WhatsAppChat({ isOpen, onClose, phone }: WhatsAppChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Olá! 👋 Sou o assistente virtual da LD Andaimes. Como posso ajudar com seu projeto hoje?",
            sender: "bot",
          },
        ])
        setIsTyping(false)
      }, 1500)
    } else {
      setMessages([])
      setInputValue("")
    }
  }, [isOpen])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() === "") return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(userMessage.text)}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-24 right-6 z-50 w-80 h-[28rem] bg-card rounded-lg shadow-3xl flex flex-col overflow-hidden border"
        >
          {/* Header */}
          <header className="bg-[#005E54] text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="LD Andaimes Logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <div>
                <h3 className="font-bold">LD Andaimes</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </header>

          {/* Messages */}
          <div
            className="flex-1 p-4 overflow-y-auto bg-repeat bg-center"
            style={{ backgroundImage: "url('/images/whatsapp-bg.png')" }}
          >
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-2.5 rounded-lg max-w-[80%] text-sm shadow-sm",
                    msg.sender === "user"
                      ? "bg-[#DCF8C6] self-end rounded-br-none"
                      : "bg-white self-start rounded-bl-none",
                  )}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2.5 rounded-lg max-w-[80%] bg-white self-start rounded-bl-none shadow-sm"
                >
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-2 border-t bg-background flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1"
              autoFocus
            />
            <Button type="submit" size="icon" className="bg-[#00A884] hover:bg-[#008a69] rounded-full h-10 w-10">
              <Send className="h-5 w-5 text-white" />
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
