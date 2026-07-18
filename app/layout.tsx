import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitFlow | Prescription Weight Loss with Semaglutide & Tirzepatide",
  description:
    "Get prescription GLP-1 weight loss treatments like semaglutide and tirzepatide online. Doctor-supervised, delivered to your door.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
Create new file, name it app/layout.tsx, paste, commit.
Then the last one, app/page.tsx:
tsxexport default function HomePage() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Prescription Weight Loss — Tirzepatide &amp; Semaglutide</h1>
        <p className="lead">
          Science-backed weight loss solutions. No hidden fees. 100% online.
        </p>
        <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
          Get Started
        </a>
      </div>
    </section>
  );
}
