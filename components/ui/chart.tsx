'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// Chart configuration type
export interface ChartConfig {
  [key: string]: {
    label?: string;
    color?: string;
    theme?: {
      light?: string;
      dark?: string;
    };
  };
}

// Chart context
const ChartContext = React.createContext<ChartConfig | null>(null);

// Chart provider
interface ChartProps {
  config: ChartConfig;
  children: React.ReactNode;
}

export function Chart({ config, children }: ChartProps) {
  return (
    <ChartContext.Provider value={config}>
      <div className="flex aspect-video justify-center text-xs">{children}</div>
    </ChartContext.Provider>
  );
}

// Chart container
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  children: React.ReactNode;
}

export function ChartContainer({
  config,
  children,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <ChartContext.Provider value={config}>
      <div
        className={cn('flex aspect-video justify-center text-xs', className)}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  );
}

// Chart tooltip content
interface ChartTooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color?: string;
    dataKey?: string;
  }>;
  label?: string;
  indicator?: 'dot' | 'line' | 'dashed';
  hideLabel?: boolean;
  hideIndicator?: boolean;
  nameKey?: string;
  labelKey?: string;
}

export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelKey,
  nameKey,
  ...props
}: ChartTooltipContentProps) {
  const config = React.useContext(ChartContext);

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        'border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl',
        className
      )}
      {...props}
    >
      {!hideLabel && label && (
        <p className="text-muted-foreground font-medium">{label}</p>
      )}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${labelKey || nameKey || item.dataKey || item.name || index}`;
          const itemConfig = config?.[key] || {};

          return (
            <div
              key={`${key}-${index}`}
              className="flex w-full items-center justify-between gap-2"
            >
              <div className="flex items-center gap-1.5">
                {!hideIndicator && (
                  <div
                    className={cn(
                      'h-2 w-2 shrink-0 rounded-[2px]',
                      indicator === 'dot' && 'rounded-full',
                      indicator === 'line' && 'w-1'
                    )}
                    style={{
                      backgroundColor: item.color || itemConfig.color,
                    }}
                  />
                )}
                <span className="text-muted-foreground">
                  {itemConfig.label || item.name}
                </span>
              </div>
              <span className="text-foreground font-mono font-medium tabular-nums">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Chart legend content
interface ChartLegendContentProps extends React.HTMLAttributes<HTMLDivElement> {
  payload?: Array<{
    value: string;
    type?: string;
    id?: string;
    color?: string;
  }>;
  nameKey?: string;
  hideIcon?: boolean;
}

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  nameKey,
  ...props
}: ChartLegendContentProps) {
  const config = React.useContext(ChartContext);

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn('flex items-center justify-center gap-4', className)}
      {...props}
    >
      {payload.map((item, index) => {
        const key = `${nameKey || item.value || index}`;
        const itemConfig = config?.[key] || {};

        return (
          <div
            key={`${key}-${index}`}
            className="[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          >
            {!hideIcon && (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color || itemConfig.color,
                }}
              />
            )}
            <span className="text-muted-foreground">
              {itemConfig.label || item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// Hook to access chart config
export function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a Chart component');
  }

  return context;
}
