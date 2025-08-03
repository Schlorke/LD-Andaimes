import type { Preview } from '@storybook/nextjs';
import React from 'react';

// Decorador para filtrar props problemáticas que causam erro Symbol
const withSafeProps = (Story: any, context: any) => {
  // Filtrar argumentos que podem conter símbolos React ou elementos
  const safeArgs = Object.fromEntries(
    Object.entries(context.args || {}).filter(([key, value]) => {
      // Excluir propriedades que podem causar problemas
      if (['$$typeof', 'ref', 'key', '_owner', '_store'].includes(key)) {
        return false;
      }

      // Excluir valores que são símbolos
      if (typeof value === 'symbol') {
        return false;
      }

      // Manter elementos React mas marcar como seguros
      if (React.isValidElement(value)) {
        return true;
      }

      return true;
    })
  );

  return React.createElement(Story, { ...context, args: safeArgs });
};

const preview: Preview = {
  decorators: [withSafeProps],

  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    docs: {
      autodocs: 'tag',
      // Configuração específica para evitar problemas com JsonValue
      source: {
        excludeDecorators: true,
        transform: (code: string) => {
          // Remover referências problemáticas do código fonte
          return code
            .replace(/\$\$typeof/g, '')
            .replace(/_owner/g, '')
            .replace(/_store/g, '');
        },
      },
    },
    // Configuração para controles - desabilitar para propriedades React
    controls: {
      exclude: [
        '$$typeof',
        'ref',
        'key',
        '_owner',
        '_store',
        'primaryAction',
        'secondaryAction',
      ],
      hideNoControlsWarning: true,
    },
  },

  // Configuração global para temas
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
