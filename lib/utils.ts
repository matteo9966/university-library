import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlaceholder(
  value: string | null | undefined,
  placeholder: string = "N/A"
): string {
  return value === null || value === undefined || value.trim() === ""
    ? placeholder
    : value;
}
