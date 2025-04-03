import Sidebar from "@/components/sidebar/sidebar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="relative flex">
        <Sidebar />
        <main className="ml-4 h-screen overflow-hidden p-4 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
