import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum | Marketing",
  description: "",
};

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <div className="flex flex-col">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
