import type { Metadata } from "next";
import "./globals.css";

import NavigationBar from "@/app/components/navigation-bar/navigation-bar";
import Footer from "@/app/components/footer/footer";

export const metadata: Metadata = {
  title: "Milk Jewelry Store",
  description: "Ukrainian store with a variety of jewelry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col gap-16">
          <header>
            <NavigationBar />
          </header>
          <main className="container mx-auto mt-28 px-10 lg:px-28 ">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
