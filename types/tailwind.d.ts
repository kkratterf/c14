import { Config } from 'tailwindcss';

declare module 'tailwindcss/types/config' {
  interface ExtendedTheme extends Config.Theme {
    // Aggiungi qui i tuoi tipi custom
  }
}
