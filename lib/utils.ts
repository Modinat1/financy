import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  // sign up
  firstName: z.string().min(8),
  lastName: z.string().min(8),
  email: z.string().email(),
  userName: z.string().min(8),
  phoneNumber: z.string().min(11),
  password: z.string().min(8),
  // lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  // address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  // city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  // state: type === 'sign-in' ? z.string().optional() : z.string(),
  // postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(6),
  // // dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  // ssn: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  // // both
  // email: z.string().email(),
  // password: z.string().min(8),
})
// export const authFormSchema = (type: string) => z.object({
//   // sign up
//   firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
//   lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
//   address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
//   city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
//   state: type === 'sign-in' ? z.string().optional() : z.string(),
//   postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(6),
//   // dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
//   ssn: type === 'sign-in' ? z.string().optional() : z.string().min(3),
//   // both
//   email: z.string().email(),
//   password: z.string().min(8),
// })
