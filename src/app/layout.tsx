import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Logopedski kabinet Dunje Joksić",
    template: "%s · Logopedski kabinet Dunje Joksić",
  },
  description:
    "Podrška deci u razvoju govora, jezika, komunikacije, čitanja i pisanja. Logopedska procena, individualni tretmani i podrška roditeljima.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${nunito.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
