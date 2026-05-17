import type { Config } from 'tailwindcss'

/**
 * Hermes Design System — Tailwind config
 * Light tokens: designer analysis (high confidence)
 * Dark tokens: DOM/CSS variable extraction (high confidence)
 *
 * Usage:
 *   1. Copy this file to your project root as tailwind.config.ts
 *   2. Add [data-theme="dark"] toggling on <html> for dark mode
 *   3. Use semantic class names (e.g. bg-canvas, text-primary) in components
 *
 * Theme switching:
 *   darkMode: ['selector', '[data-theme="dark"]']
 */

const hermes = {
  // ── Primitive: brand blue scale ──────────────────────────────
  brand: {
    '050': '#EEF3FB',
    '100': '#DDE8F8',
    '200': '#CBDCF4',
    '300': '#9FBDEB',
    '500': '#6FA0E6',
    '600': '#2F73E0',
    '700': '#0050C8',
  },
  // ── Primitive: paper / neutral ───────────────────────────────
  paper: {
    '000': '#FFFFFF',
    '050': '#F7FAFD',
    '100': '#F1F5FA',
    '200': '#E5EBF3',
  },
  // ── Primitive: ink ───────────────────────────────────────────
  ink: {
    '500': '#7E93B2',
    '700': '#4E647F',
  },
  // ── Primitive: dark base ─────────────────────────────────────
  dark: {
    base: '#041C1C',
    mid:  '#FFE6CB',
    fg:   '#FFFFFF',
  },
} as const

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],

  // Use data-attribute selector for theme switching
  darkMode: ['selector', '[data-theme="dark"]'],

  theme: {
    extend: {
      // ── Colors ─────────────────────────────────────────────────
      colors: {
        // Raw primitives (use sparingly; prefer semantic tokens below)
        brand:  hermes.brand,
        paper:  hermes.paper,
        ink:    hermes.ink,

        // ── Semantic: background ──────────────────────────────────
        canvas:        'var(--color-bg-canvas)',
        surface:       'var(--color-bg-surface)',
        'surface-muted': 'var(--color-bg-surface-muted)',
        'accent-soft': 'var(--color-bg-accent-soft)',

        // ── Semantic: text ────────────────────────────────────────
        primary:   'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        body:      'var(--color-text-body)',
        muted:     'var(--color-text-muted)',

        // ── Semantic: border ──────────────────────────────────────
        border:        'var(--color-border-default)',
        'border-subtle': 'var(--color-border-subtle)',

        // ── Semantic: brand action ────────────────────────────────
        'brand-action':      'var(--color-brand)',
        'brand-hover':       'var(--color-brand-hover)',
        'brand-soft':        'var(--color-brand-soft)',
        'brand-soft-hover':  'var(--color-brand-soft-hover)',

        // ── Component: header ─────────────────────────────────────
        'header-bg':           'var(--header-bg)',
        'header-border':       'var(--header-border)',
        'header-wordmark':     'var(--header-wordmark)',
        'header-logo':         'var(--header-logo)',
        'header-nav':          'var(--header-nav-link)',
        'header-nav-hover':    'var(--header-nav-link-hover)',
        'header-toggle-bg':    'var(--header-toggle-bg)',
        'header-toggle-icon':  'var(--header-toggle-icon)',

        // ── Component: hero ───────────────────────────────────────
        'hero-bg':                   'var(--hero-bg)',
        'hero-title':                'var(--hero-title)',
        'hero-title-accent':         'var(--hero-title-accent)',
        'hero-subtitle':             'var(--hero-subtitle)',
        'hero-code-bg':              'var(--hero-code-bg)',
        'hero-code-text':            'var(--hero-code-text)',
        'hero-code-border':          'var(--hero-code-border)',
        'hero-cta-primary-bg':       'var(--hero-cta-primary-bg)',
        'hero-cta-primary-text':     'var(--hero-cta-primary-text)',
        'hero-cta-secondary-bg':     'var(--hero-cta-secondary-bg)',
        'hero-cta-secondary-text':   'var(--hero-cta-secondary-text)',
        'hero-cta-secondary-border': 'var(--hero-cta-secondary-border)',

        // ── Component: terminal ───────────────────────────────────
        'terminal-bg':           'var(--terminal-bg)',
        'terminal-border':       'var(--terminal-border)',
        'terminal-header-bg':    'var(--terminal-header-bg)',
        'terminal-prompt':       'var(--terminal-prompt)',
        'terminal-command':      'var(--terminal-command)',
        'terminal-output':       'var(--terminal-output)',
        'terminal-cursor':       'var(--terminal-cursor)',
        'terminal-selection-bg': 'var(--terminal-selection-bg)',
        'terminal-title':        'var(--terminal-title)',
        'terminal-subtitle':     'var(--terminal-subtitle)',

        // ── Component: feature cards ──────────────────────────────
        'feature-section-bg':       'var(--feature-section-bg)',
        'feature-card-bg':          'var(--feature-card-bg)',
        'feature-card-bg-hover':    'var(--feature-card-bg-hover)',
        'feature-card-border':      'var(--feature-card-border)',
        'feature-card-border-hover':'var(--feature-card-border-hover)',
        'feature-icon-bg':          'var(--feature-icon-bg)',
        'feature-icon':             'var(--feature-icon-color)',
        'feature-title':            'var(--feature-title)',
        'feature-body':             'var(--feature-body)',
        'feature-tag-bg':           'var(--feature-tag-bg)',
        'feature-tag-text':         'var(--feature-tag-text)',

        // ── Component: footer ─────────────────────────────────────
        'footer-bg':           'var(--footer-bg)',
        'footer-border':       'var(--footer-border-top)',
        'footer-text':         'var(--footer-text)',
        'footer-text-muted':   'var(--footer-text-muted)',
        'footer-link':         'var(--footer-link)',
        'footer-link-hover':   'var(--footer-link-hover)',
        'footer-badge-bg':     'var(--footer-badge-bg)',
        'footer-badge-text':   'var(--footer-badge-text)',
      },

      // ── Typography ─────────────────────────────────────────────
      fontFamily: {
        display:            ['Mondwest', 'serif'],
        heading:            ['Collapse', 'sans-serif'],
        'heading-compressed': ['Rules Compressed', 'sans-serif'],
        'heading-expanded':   ['Rules Expanded', 'sans-serif'],
        mono:               ['Courier Prime', 'Courier New', 'monospace'],
        body:               ['Collapse', 'system-ui', 'sans-serif'],
      },

      // ── Ring / outline ─────────────────────────────────────────
      ringColor: {
        DEFAULT: 'var(--color-focus-ring)',
        brand:   'var(--color-focus-ring)',
      },

      // ── Box shadow ─────────────────────────────────────────────
      boxShadow: {
        'card':       '0 1px 3px rgba(0, 80, 200, 0.08), 0 1px 2px rgba(0, 80, 200, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 80, 200, 0.12), 0 2px 4px rgba(0, 80, 200, 0.08)',
        'card-dark':       '0 1px 3px rgba(0,0,0,0.4)',
        'card-dark-hover': '0 4px 12px rgba(0,0,0,0.5)',
      },

      // ── Border radius ──────────────────────────────────────────
      borderRadius: {
        'card': '0px',
        'chip': '0px',
        'btn':  '0px',
        'control': '9999px',
      },
    },
  },

  plugins: [],
}

export default config
