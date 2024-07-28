import { Rubik_Mono_One } from "next/font/google";

// Non variable fonts.
// you have to specify array of weight

// For variable fonts.
// you have to specify weight= "variable" value only.

const open_sans = Rubik_Mono_One({
  weight: "variable",
  style: ["italic", "normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-highlight",
});

export { Rubik_Mono_One };