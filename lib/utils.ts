import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function formatNumber(value: number | string, locale: string = "en-US"): string {
  if (value === null || value === undefined || value === "") return "";
  const num = typeof value === "string" ? parseFloat(value) : value;
  return new Intl.NumberFormat(locale).format(num);
}

export const companyInfo = {
  name: "Rexoray Ace",
  address: "Wuye, Abuja.",
  phoneNumber: "+2347014270059",
  emails: [
    // Must be two email
    "Raynald.uku@rexorayace.com",
    "Raynald.uku@rexoray.com",
  ],
  website: "https://rexorayace.com",
  workDays: "Mon - Sat 9:00am - 5:00pm",
  socialMedia: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    gmail: "",
    whatsapp: ""
  },
};


