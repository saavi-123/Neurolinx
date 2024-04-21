import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const MAZIUS_DISPLAY = localFont({
  src: "./../../public/fonts/mazius-display-regular.otf",
  display: "swap",
});

export const INTER = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
