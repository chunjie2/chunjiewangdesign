import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: {
    default: "Architectural Portfolio",
    template: "%s | Architectural Portfolio"
  },
  description: "A minimal editorial portfolio framework for a junior architectural designer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Architectural Portfolio",
    description: "Selected architectural works, process, drawings, and contact information.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
