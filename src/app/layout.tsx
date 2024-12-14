import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css?v=1.0";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export const metadata: Metadata = {
  title: "ollie_tan | senior_software_developer",
  description: "Ollie Tan's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WC8HKRFX"></GoogleTagManager>
      <body className="antialiased bg-gray-900 text-slate-200 text-md font-medium leading-relaxed">
        <AppHeader></AppHeader>
        <main className="">{children}</main>
        <AppFooter></AppFooter>
      </body>
    </html>
  );
}
