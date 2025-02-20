import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Purchase Chain",
  description: "simply procure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex h-screen`}
        suppressHydrationWarning
      >
        <main className="flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
