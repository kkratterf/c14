import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';
import typographyConfig from './typography.config';

export const config: Config = {
  darkMode: ['class'],
  content: [
    './node_modules/@c14/design-system/components/**/*.{ts,tsx}',
    './node_modules/@c14/design-system/lib/**/*.{ts,tsx}',
    './node_modules/@c14/design-system/index.tsx',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './providers/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          50: 'var(--color-brand-50)',
          100: 'var(--color-brand-100)',
          200: 'var(--color-brand-200)',
          300: 'var(--color-brand-300)',
          400: 'var(--color-brand-400)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
          800: 'var(--color-brand-800)',
          900: 'var(--color-brand-900)',
          950: 'var(--color-brand-950)',
        },
        neutral: {
          0: 'var(--color-neutral-0)',
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)',
          1000: 'var(--color-neutral-1000)',
        },
      },
      backgroundColor: {
        // BG
        background: 'var(--color-bg-background)',
        card: 'var(--color-bg-card)',
        subtle: 'var(--color-bg-subtle)',
        muted: 'var(--color-bg-muted)',
        inverse: 'var(--color-bg-inverse)',
        elevated: 'var(--color-bg-elevated)',
        mask: 'var(--color-bg-mask)',
        item: 'var(--color-bg-item)',
        'item-hover': 'var(--color-bg-item-hover)',
        'item-active': 'var(--color-bg-item-active)',
        'item-selected': 'var(--color-bg-item-selected)',
        // BG BRAND
        brand: 'var(--color-bg-brand-default)',
        'brand-hover': 'var(--color-bg-brand-hover)',
        'brand-active': 'var(--color-bg-brand-active)',
        'brand-subtle': 'var(--color-bg-brand-subtle)',
        'brand-subtlest': 'var(--color-bg-brand-subtlest)',
        // BG NEUTRAL
        neutral: 'var(--color-bg-neutral-default)',
        'neutral-hover': 'var(--color-bg-neutral-hover)',
        'neutral-active': 'var(--color-bg-neutral-active)',
        'neutral-disabled': 'var(--color-bg-neutral-disabled)',
        // BG DANGER
        danger: 'var(--color-bg-danger-default)',
        'danger-hover': 'var(--color-bg-danger-hover)',
        'danger-active': 'var(--color-bg-danger-active)',
        'danger-subtle': 'var(--color-bg-danger-subtle)',
        'danger-subtlest': 'var(--color-bg-danger-subtlest)',
        // BG WARNING
        warning: 'var(--color-bg-warning-default)',
        'warning-hover': 'var(--color-bg-warning-hover)',
        'warning-active': 'var(--color-bg-warning-active)',
        'warning-subtle': 'var(--color-bg-warning-subtle)',
        'warning-subtlest': 'var(--color-bg-warning-subtlest)',
        // BG BORDER
        border: 'var(--color-border-default)',
        'border-item': 'var(--color-border-item)',
        'border-item-hover': 'var(--color-border-item-hover)',
        // BG CHART
        'chart-brand': 'var(--color-bg-chart-brand)',
        chart: {
          brand: 'var(--color-bg-chart-brand)',
          'brand-subtle': 'var(--color-bg-chart-brand-subtle)',
          'brand-subtlest': 'var(--color-bg-chart-brand-subtlest)',
          neutral: 'var(--color-bg-chart-neutral)',
          'neutral-subtle': 'var(--color-bg-chart-neutral-subtle)',
          'neutral-subtlest': 'var(--color-bg-chart-neutral-subtlest)',
          red: 'var(--color-bg-chart-red)',
          'red-subtle': 'var(--color-bg-chart-red-subtle)',
          'red-subtlest': 'var(--color-bg-chart-red-subtlest)',
          amber: 'var(--color-bg-chart-amber)',
          'amber-subtle': 'var(--color-bg-chart-amber-subtle)',
          'amber-subtlest': 'var(--color-bg-chart-amber-subtlest)',
          emerald: 'var(--color-bg-chart-emerald)',
          'emerald-subtle': 'var(--color-bg-chart-emerald-subtle)',
          'emerald-subtlest': 'var(--color-bg-chart-emerald-subtlest)',
          teal: 'var(--color-bg-chart-teal)',
          'teal-subtle': 'var(--color-bg-chart-teal-subtle)',
          'teal-subtlest': 'var(--color-bg-chart-teal-subtlest)',
          cyan: 'var(--color-bg-chart-cyan)',
          'cyan-subtle': 'var(--color-bg-chart-cyan-subtle)',
          'cyan-subtlest': 'var(--color-bg-chart-cyan-subtlest)',
          blue: 'var(--color-bg-chart-blue)',
          'blue-subtle': 'var(--color-bg-chart-blue-subtle)',
          'blue-subtlest': 'var(--color-bg-chart-blue-subtlest)',
          purple: 'var(--color-bg-chart-purple)',
          'purple-subtle': 'var(--color-bg-chart-purple-subtle)',
          'purple-subtlest': 'var(--color-bg-chart-purple-subtlest)',
          pink: 'var(--color-bg-chart-pink)',
          'pink-subtle': 'var(--color-bg-chart-pink-subtle)',
          'pink-subtlest': 'var(--color-bg-chart-pink-subtlest)',
        },
      },
      textColor: {
        // TEXT
        DEFAULT: 'var(--color-text-default)',
        description: 'var(--color-text-description)',
        placeholder: 'var(--color-text-placeholder)',
        inverse: 'var(--color-text-inverse)',
        disabled: 'var(--color-text-disabled)',
        // TEXT BRAND
        brand: 'var(--color-text-brand-default)',
        'brand-hover': 'var(--color-text-brand-hover)',
        'brand-active': 'var(--color-text-brand-active)',
        'brand-strong': 'var(--color-text-brand-strong)',
        'brand-inverse': 'var(--color-text-brand-inverse)',
        // TEXT DANGER
        danger: 'var(--color-text-danger-default)',
        'danger-hover': 'var(--color-text-danger-hover)',
        'danger-active': 'var(--color-text-danger-active)',
        'danger-strong': 'var(--color-text-danger-strong)',
        'danger-inverse': 'var(--color-text-danger-inverse)',
        // TEXT WARNING
        warning: 'var(--color-text-warning-default)',
        'warning-hover': 'var(--color-text-warning-hover)',
        'warning-active': 'var(--color-text-warning-active)',
        'warning-strong': 'var(--color-text-warning-strong)',
        'warning-inverse': 'var(--color-text-warning-inverse)',
        // TEXT CHART
        chart: {
          brand: 'var(--color-text-chart-brand)',
          'brand-strong': 'var(--color-text-chart-brand-strong)',
          neutral: 'var(--color-text-chart-neutral)',
          'neutral-strong': 'var(--color-text-chart-neutral-strong)',
          red: 'var(--color-text-chart-red)',
          'red-strong': 'var(--color-text-chart-red-strong)',
          amber: 'var(--color-text-chart-amber)',
          'amber-strong': 'var(--color-text-chart-amber-strong)',
          emerald: 'var(--color-text-chart-emerald)',
          'emerald-strong': 'var(--color-text-chart-emerald-strong)',
          teal: 'var(--color-text-chart-teal)',
          'teal-strong': 'var(--color-text-chart-teal-strong)',
          cyan: 'var(--color-text-chart-cyan)',
          'cyan-strong': 'var(--color-text-chart-cyan-strong)',
          blue: 'var(--color-text-chart-blue)',
          'blue-strong': 'var(--color-text-chart-blue-strong)',
          purple: 'var(--color-text-chart-purple)',
          'purple-strong': 'var(--color-text-chart-purple-strong)',
          pink: 'var(--color-text-chart-pink)',
          'pink-strong': 'var(--color-text-chart-pink-strong)',
        },
      },
      borderColor: {
        // BORDER
        default: 'var(--color-border-default)',
        item: 'var(--color-border-item)',
        'item-hover': 'var(--color-border-item-hover)',
        disabled: 'var(--color-border-disabled)',
        // BORDER BRAND
        brand: 'var(--color-border-brand-default)',
        'brand-hover': 'var(--color-border-brand-hover)',
        'brand-active': 'var(--color-border-brand-active)',
        'brand-subtle': 'var(--color-border-brand-subtle)',
        'brand-subtlest': 'var(--color-border-brand-subtlest)',
        // BORDER DANGER
        danger: 'var(--color-border-danger-default)',
        'danger-hover': 'var(--color-border-danger-hover)',
        'danger-active': 'var(--color-border-danger-active)',
        'danger-subtle': 'var(--color-border-danger-subtle)',
        'danger-subtlest': 'var(--color-border-danger-subtlest)',
        // BORDER WARNING
        warning: 'var(--color-border-warning-default)',
        'warning-hover': 'var(--color-border-warning-hover)',
        'warning-active': 'var(--color-border-warning-active)',
        'warning-subtle': 'var(--color-border-warning-subtle)',
        'warning-subtlest': 'var(--color-border-warning-subtlest)',
        // BORDER CHART
        chart: {
          brand: 'var(--color-border-chart-brand)',
          'brand-subtle': 'var(--color-border-chart-brand-subtle)',
          'brand-subtlest': 'var(--color-border-chart-brand-subtlest)',
          neutral: 'var(--color-border-chart-neutral)',
          'neutral-subtle': 'var(--color-border-chart-neutral-subtle)',
          'neutral-subtlest': 'var(--color-border-chart-neutral-subtlest)',
          red: 'var(--color-border-chart-red)',
          'red-subtle': 'var(--color-border-chart-red-subtle)',
          'red-subtlest': 'var(--color-border-chart-red-subtlest)',
          amber: 'var(--color-border-chart-amber)',
          'amber-subtle': 'var(--color-border-chart-amber-subtle)',
          'amber-subtlest': 'var(--color-border-chart-amber-subtlest)',
          emerald: 'var(--color-border-chart-emerald)',
          'emerald-subtle': 'var(--color-border-chart-emerald-subtle)',
          'emerald-subtlest': 'var(--color-border-chart-emerald-subtlest)',
          teal: 'var(--color-border-chart-teal)',
          'teal-subtle': 'var(--color-border-chart-teal-subtle)',
          'teal-subtlest': 'var(--color-border-chart-teal-subtlest)',
          cyan: 'var(--color-border-chart-cyan)',
          'cyan-subtle': 'var(--color-border-chart-cyan-subtle)',
          'cyan-subtlest': 'var(--color-border-chart-cyan-subtlest)',
          blue: 'var(--color-border-chart-blue)',
          'blue-subtle': 'var(--color-border-chart-blue-subtle)',
          'blue-subtlest': 'var(--color-border-chart-blue-subtlest)',
          purple: 'var(--color-border-chart-purple)',
          'purple-subtle': 'var(--color-border-chart-purple-subtle)',
          'purple-subtlest': 'var(--color-border-chart-purple-subtlest)',
          pink: 'var(--color-border-chart-pink)',
          'pink-subtle': 'var(--color-border-chart-pink-subtle)',
          'pink-subtlest': 'var(--color-border-chart-pink-subtlest)',
        },
        // BACKGROUND
        background: 'var(--color-bg-background)',
      },
      divideColor: {
        default: 'var(--color-border-default)',
      },
      outlineColor: {
        brand: 'var(--color-border-brand-default)',
        'brand-subtlest': 'var(--color-border-brand-subtlest)',
        danger: 'var(--color-border-danger)',
        'danger-subtlest': 'var(--color-border-danger-subtlest)',
        warning: 'var(--color-border-warning)',
        'warning-subtlest': 'var(--color-border-warning-subtlest)',
      },
      ringColor: {
        brand: 'var(--color-border-brand-default)',
        'brand-subtlest': 'var(--color-border-brand-subtlest)',
        danger: 'var(--color-border-danger)',
        'danger-subtlest': 'var(--color-border-danger-subtlest)',
        warning: 'var(--color-border-warning)',
        'warning-subtlest': 'var(--color-border-warning-subtlest)',
      },
      ringOffsetColor: {
        background: 'var(--color-bg-background)',
        elevated: 'var(--color-bg-elevated)',
        brand: 'var(--color-bg-brand-default)',
        danger: 'var(--color-bg-danger-default)',
        warning: 'var(--color-bg-warning-default)',
      },
      stroke: {
        // STROKE
        icon: 'var(--color-icon-default)',
        'icon-hover': 'var(--color-icon-hover)',
        'icon-active': 'var(--color-icon-active)',
        'icon-inverse': 'var(--color-icon-inverse)',
        'icon-disabled': 'var(--color-icon-disabled)',
        // STROKE BRAND
        'icon-brand': 'var(--color-icon-brand-default)',
        'icon-brand-hover': 'var(--color-icon-brand-hover)',
        'icon-brand-active': 'var(--color-icon-brand-active)',
        'icon-brand-strong': 'var(--color-icon-brand-strong)',
        'icon-brand-inverse': 'var(--color-icon-brand-inverse)',
        // STROKE DANGER
        'icon-danger': 'var(--color-icon-danger-default)',
        'icon-danger-hover': 'var(--color-icon-danger-hover)',
        'icon-danger-active': 'var(--color-icon-danger-active)',
        'icon-danger-strong': 'var(--color-icon-danger-strong)',
        'icon-danger-inverse': 'var(--color-icon-danger-inverse)',
        // STROKE WARNING
        'icon-warning': 'var(--color-icon-warning-default)',
        'icon-warning-hover': 'var(--color-icon-warning-hover)',
        'icon-warning-active': 'var(--color-icon-warning-active)',
        'icon-warning-strong': 'var(--color-icon-warning-strong)',
        'icon-warning-inverse': 'var(--color-icon-warning-inverse)',
        // STROKE CHART
        'icon-chart': {
          brand: 'var(--color-icon-chart-brand)',
          'brand-strong': 'var(--color-icon-chart-brand-strong)',
          neutral: 'var(--color-icon-chart-neutral)',
          'neutral-strong': 'var(--color-icon-chart-neutral-strong)',
          red: 'var(--color-icon-chart-red)',
          'red-strong': 'var(--color-icon-chart-red-strong)',
          amber: 'var(--color-icon-chart-amber)',
          'amber-strong': 'var(--color-icon-chart-amber-strong)',
          emerald: 'var(--color-icon-chart-emerald)',
          'emerald-strong': 'var(--color-icon-chart-emerald-strong)',
          teal: 'var(--color-icon-chart-teal)',
          'teal-strong': 'var(--color-icon-chart-teal-strong)',
          cyan: 'var(--color-icon-chart-cyan)',
          'cyan-strong': 'var(--color-icon-chart-cyan-strong)',
          blue: 'var(--color-icon-chart-blue)',
          'blue-strong': 'var(--color-icon-chart-blue-strong)',
          purple: 'var(--color-icon-chart-purple)',
          'purple-strong': 'var(--color-icon-chart-purple-strong)',
          pink: 'var(--color-icon-chart-pink)',
          'pink-strong': 'var(--color-icon-chart-pink-strong)',
        },
      },
      fill: {
        // FILL
        icon: 'var(--color-icon-default)',
        'icon-hover': 'var(--color-icon-hover)',
        'icon-active': 'var(--color-icon-active)',
        'icon-inverse': 'var(--color-icon-inverse)',
        'icon-disabled': 'var(--color-icon-disabled)',
        // FILL BRAND
        'icon-brand': 'var(--color-icon-brand-default)',
        'icon-brand-hover': 'var(--color-icon-brand-hover)',
        'icon-brand-active': 'var(--color-icon-brand-active)',
        'icon-brand-strong': 'var(--color-icon-brand-strong)',
        'icon-brand-inverse': 'var(--color-icon-brand-inverse)',
        // FILL DANGER
        'icon-danger': 'var(--color-icon-danger-default)',
        'icon-danger-hover': 'var(--color-icon-danger-hover)',
        'icon-danger-active': 'var(--color-icon-danger-active)',
        'icon-danger-strong': 'var(--color-icon-danger-strong)',
        'icon-danger-inverse': 'var(--color-icon-danger-inverse)',
        // FILL WARNING
        'icon-warning': 'var(--color-icon-warning-default)',
        'icon-warning-hover': 'var(--color-icon-warning-hover)',
        'icon-warning-active': 'var(--color-icon-warning-active)',
        'icon-warning-strong': 'var(--color-icon-warning-strong)',
        'icon-warning-inverse': 'var(--color-icon-warning-inverse)',
        // FILL CHART
        'icon-chart': {
          brand: 'var(--color-icon-chart-brand)',
          'brand-strong': 'var(--color-icon-chart-brand-strong)',
          neutral: 'var(--color-icon-chart-neutral)',
          'neutral-strong': 'var(--color-icon-chart-neutral-strong)',
          red: 'var(--color-icon-chart-red)',
          'red-strong': 'var(--color-icon-chart-red-strong)',
          amber: 'var(--color-icon-chart-amber)',
          'amber-strong': 'var(--color-icon-chart-amber-strong)',
          emerald: 'var(--color-icon-chart-emerald)',
          'emerald-strong': 'var(--color-icon-chart-emerald-strong)',
          teal: 'var(--color-icon-chart-teal)',
          'teal-strong': 'var(--color-icon-chart-teal-strong)',
          cyan: 'var(--color-icon-chart-cyan)',
          'cyan-strong': 'var(--color-icon-chart-cyan-strong)',
          blue: 'var(--color-icon-chart-blue)',
          'blue-strong': 'var(--color-icon-chart-blue-strong)',
          purple: 'var(--color-icon-chart-purple)',
          'purple-strong': 'var(--color-icon-chart-purple-strong)',
          pink: 'var(--color-icon-chart-pink)',
          'pink-strong': 'var(--color-icon-chart-pink-strong)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        brand: 'var(--font-brand)',
      },
      fontSize: {
        'display-website': [
          '3rem',
          {
            lineHeight: '1',
            letterSpacing: '-2.5%',
            fontWeight: '700',
          },
        ],
        'heading-screen': [
          '2.25rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '-2.5%',
            fontWeight: '600',
          },
        ],
        'heading-section': [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-1.5%',
            fontWeight: '600',
          },
        ],
        'heading-subsection': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-1.5%',
            fontWeight: '600',
          },
        ],
        'heading-body': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '-1%',
            fontWeight: '600',
          },
        ],
        'heading-group': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '1.5%',
            fontWeight: '500',
          },
        ],
        'md-semibold': [
          '0.875rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '1.25%',
            fontWeight: '600',
          },
        ],
        'md-medium': [
          '0.875rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '1.25%',
            fontWeight: '500',
          },
        ],
        md: [
          '0.875rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '1%',
            fontWeight: '400',
          },
        ],
        'lg-semibold': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.5%',
            fontWeight: '600',
          },
        ],
        'lg-medium': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.5%',
            fontWeight: '500',
          },
        ],
        lg: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.5%',
            fontWeight: '400',
          },
        ],
        'sm-medium': [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '500',
          },
        ],
        sm: [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
          },
        ],
        xs: [
          '0.5rem',
          {
            lineHeight: '0.75rem',
            fontWeight: '400',
          },
        ],
      },
      borderRadius: {
        sm: 'var(--border-radius-sm)',
        DEFAULT: 'var(--border-radius-default)',
        lg: 'var(--border-radius-lg)',
      },
      screens: {
        xs: '390px',
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(6px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-6px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        // Accordion
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        dialogOverlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        dialogContentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -45%) scale(0.95)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        drawerSlideRightAndFade: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(100%)' },
        },
      },

      animation: {
        hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        // Accordion
        accordionDown: 'accordionDown 0.2s ease-out',
        accordionUp: 'accordionUp 0.2s ease-out',
        // Dialog
        dialogOverlayShow:
          'dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        dialogContentShow:
          'dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        // Drawer
        drawerSlideLeftAndFade:
          'drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        drawerSlideRightAndFade: 'drawerSlideRightAndFade 150ms ease-in',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
      typography: typographyConfig,
    },
  },
  plugins: [animate, typography, forms],
};
