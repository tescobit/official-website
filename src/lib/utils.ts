import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleLinkClick = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  id: string,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  setIsOpen?.(false);

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
