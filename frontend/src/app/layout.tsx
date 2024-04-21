import clsx from "clsx";
import type { Metadata } from "next";

import "../styles/main.scss";
import { INTER } from "@/app/fonts";
import { QueryProvider } from "@/components/query-provider";

export const metadata: Metadata = {
  title: "Neurolinx: ADHD Predictor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={clsx(INTER.className, "min-h-screen")}>
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
