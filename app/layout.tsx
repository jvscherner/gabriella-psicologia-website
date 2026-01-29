import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Gabriella B. Engelhardt - Psicóloga",
  description: "Psicóloga dedicada ao acolhimento e cuidado do seu bem-estar emocional. Atendimento em psicoterapia, barras de access e avaliação psicológica.",
  keywords: ["psicóloga", "psicoterapia", "barras de access", "avaliação psicológica", "terapia"],
  authors: [{ name: "Gabriella B. Engelhardt" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#0d9488",
  openGraph: {
    title: "Gabriella B. Engelhardt - Psicóloga",
    description: "Atendimento psicológico humanizado com foco no seu desenvolvimento pessoal.",
    type: "website",
    locale: "pt_BR",
    siteName: "Gabriella B. Engelhardt - Psicóloga"
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />

        {/* Main content com padding-top para compensar o header fixo */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />

        {/* Botão WhatsApp Flutuante */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
