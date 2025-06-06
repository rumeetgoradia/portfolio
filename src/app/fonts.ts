import {Fira_Code, Manrope} from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});
export const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ['400', '700'],
    style: ['normal'],
    variable: "--font-fira-code",
});