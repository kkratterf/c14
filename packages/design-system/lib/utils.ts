import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';;
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const focusRing = [
  // base
  "outline outline-offset-1 outline-0 focus-visible:outline-2",
  // outline color
  "outline-brand",
]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-brand-subtlest",
  // border color
  "focus:border-brand",
]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-danger",
  // ring color
  "ring-danger-subtlest",
]

