import type { Metadata } from "next";
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
      <body className="antialiased bg-gray-900 text-slate-200 text-lg">
        <AppHeader></AppHeader>
        <main className="">{children}</main>
        <AppFooter></AppFooter>
      </body>
    </html>
  );
}
