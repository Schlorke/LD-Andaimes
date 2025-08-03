"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-3d hover:shadow-3d-hover hover:from-primary-600 hover:to-primary-700 active:shadow-3d-active",
        secondary:
          "bg-secondary text-secondary-foreground shadow-card-3d hover:shadow-card-3d-hover hover:bg-secondary/90",
        accent:
          "bg-gradient-to-r from-accent-400 to-accent-500 text-white shadow-3d hover:shadow-3d-hover hover:from-accent-500 hover:to-accent-600 active:shadow-3d-active",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-3d hover:shadow-3d-hover hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary shadow-card-3d hover:shadow-card-3d-hover hover:bg-primary hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 rounded-md px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="inline-flex"
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
      </motion.div>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
