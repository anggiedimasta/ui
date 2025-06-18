import { twMerge } from 'tailwind-merge'
import { type ClassValue } from 'clsx'
import { clsx } from 'clsx'

export function useClasses() {
  const merge = (baseClasses: string, additionalClasses: ClassValue) => {
    return twMerge(clsx(baseClasses, additionalClasses))
  }

  return {
    merge,
  }
}