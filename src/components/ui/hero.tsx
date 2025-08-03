import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const heroVariants = cva(
  'flex flex-col items-center justify-center text-center px-4 py-16',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        gradient:
          'bg-gradient-to-br from-[#E36A00] via-[#FFAA33] to-[#f59e0b] text-white',
        image:
          'bg-cover bg-center bg-no-repeat text-white relative before:absolute before:inset-0 before:bg-black/40',
        minimal: 'bg-gray-50 text-gray-900',
      },
      size: {
        sm: 'py-12 px-4',
        md: 'py-16 px-6',
        lg: 'py-24 px-8',
        xl: 'py-32 px-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface HeroProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heroVariants> {
  title: string;
  subtitle?: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  backgroundImage?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      variant,
      size,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      backgroundImage,
      ...props
    },
    ref
  ) => {
    const style =
      backgroundImage && variant === 'image'
        ? { backgroundImage: `url(${backgroundImage})` }
        : undefined;

    return (
      <section
        ref={ref}
        className={cn(heroVariants({ variant, size, className }))}
        style={style}
        {...props}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 md:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryAction}
              {secondaryAction}
            </div>
          )}
        </div>
      </section>
    );
  }
);
Hero.displayName = 'Hero';

export { Hero, heroVariants };
