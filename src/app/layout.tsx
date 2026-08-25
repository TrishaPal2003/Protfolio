import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trisha Pal — Full-Stack Developer",
  description:
    "Portfolio of Trisha Pal, a full-stack developer and competitive programmer building with React, Django, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
