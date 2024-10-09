import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className={""}>
        <MainNavbar/>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
