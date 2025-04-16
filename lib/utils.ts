import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYear() {
  return new Date().getFullYear()
}

export const axiosClient = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 5000,
});
