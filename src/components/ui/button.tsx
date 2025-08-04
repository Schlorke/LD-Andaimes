'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden transform-gpu',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 active:shadow-md border-0',
        secondary:
          'bg-white text-gray-800 shadow-lg hover:shadow-xl hover:bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700',
        accent:
          'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:shadow-xl hover:from-orange-500 hover:to-orange-600 active:shadow-md border-0',
        ghost:
          'hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-900/20 dark:hover:text-orange-400 transition-all duration-300',
        destructive:
          'bg-red-500 text-white shadow-lg hover:shadow-xl hover:bg-red-600 active:shadow-md',
        outline:
          'border-2 border-orange-500 bg-transparent text-orange-600 shadow-md hover:shadow-lg hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-gray-900',
        link: 'text-orange-600 underline-offset-4 hover:underline dark:text-orange-400',
      },
      size: {
        sm: 'h-9 rounded-md px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 rounded-lg px-8 text-base font-semibold',
        xl: 'h-14 rounded-xl px-10 text-lg font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="inline-flex"
        whileHover={{ scale: 1.01, y: -2 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
