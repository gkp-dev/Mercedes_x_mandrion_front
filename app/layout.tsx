import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMPOSITION MB",
  description:
    "Galerie d'art numérique — Mercedes-Benz × Piet Mondrian. Collection capsule exclusive croisant l'ingénierie allemande et le néoplasticisme.",
  keywords: ["Mercedes-Benz", "Mondrian", "art", "collection", "automobile"],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
