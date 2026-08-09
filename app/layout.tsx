import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arun Prajapati — Portfolio",
  description: "Portfolio of Arun Prajapati, based in Mumbai, Maharashtra, India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
