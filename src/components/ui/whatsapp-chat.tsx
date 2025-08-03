'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface WhatsAppChatProps {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
}

export function WhatsAppChat({ isOpen, onClose, phone }: WhatsAppChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: 'Olá! 👋 Sou o assistente virtual da LD Andaimes. Como posso ajudar com seu projeto hoje?',
            sender: 'bot',
          },
        ]);
        setIsTyping(false);
      }, 1500);
    } else {
      setMessages([]);
      setInputValue('');
    }
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(userMessage.text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-card shadow-3xl fixed right-6 bottom-24 z-50 flex h-[28rem] w-80 flex-col overflow-hidden rounded-lg border"
        >
          {/* Header */}
          <header className="flex items-center justify-between bg-[#005E54] p-3 text-white">
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
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </header>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto bg-center bg-repeat p-4"
            style={{ backgroundImage: "url('/images/whatsapp-bg.png')" }}
          >
            <div className="flex flex-col gap-3">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'max-w-[80%] rounded-lg p-2.5 text-sm shadow-sm',
                    msg.sender === 'user'
                      ? 'self-end rounded-br-none bg-[#DCF8C6]'
                      : 'self-start rounded-bl-none bg-white'
                  )}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[80%] self-start rounded-lg rounded-bl-none bg-white p-2.5 shadow-sm"
                >
                  <div className="flex items-center gap-1">
                    <span className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]" />
                    <span className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]" />
                    <span className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="bg-background flex items-center gap-2 border-t p-2"
          >
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              className="h-10 w-10 rounded-full bg-[#00A884] hover:bg-[#008a69]"
            >
              <Send className="h-5 w-5 text-white" />
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
