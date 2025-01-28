import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';;
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const focusRing = ["outline outline-brand outline-offset-1 outline-0 focus-visible:outline-2"]

export const focusInput = ["focus:ring-2 focus:ring-brand-subtlest focus:border-brand"]

export const hasErrorInput = ["ring-2 border-danger ring-danger-subtlest"]

