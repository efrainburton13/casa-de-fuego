import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://casadefuegoyliberacion.com";

export const metadata: Metadata = {
  title: {
    default: "Iglesia Casa de Fuego y Liberación | Tocumen, Panamá",
    template: "%s | Casa de Fuego y Liberación",
  },
  description:
    "Iglesia Casa de Fuego y Liberación en Tocumen, Panamá. Cultos dominicales, estudios bíblicos, noches de avivamiento, eventos y comunidad cristiana. Ven y experimenta la presencia de Dios.",
  keywords: [
    "iglesia en Panamá",
    "iglesia en Tocumen",
    "iglesia cristiana Panamá",
    "Casa de Fuego y Liberación",
    "cultos en Tocumen",
    "iglesia evangélica Panamá",
    "avivamiento Panamá",
    "estudio bíblico Tocumen",
    "iglesia cerca de mí Panamá",
    "comunidad cristiana Tocumen",
    "iglesia pentecostal Panamá",
    "culto dominical Tocumen",
  ],
  authors: [{ name: "Iglesia Casa de Fuego y Liberación" }],
  creator: "Iglesia Casa de Fuego y Liberación",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: siteUrl,
    siteName: "Casa de Fuego y Liberación",
    title: "Iglesia Casa de Fuego y Liberación | Tocumen, Panamá",
    description:
      "Un lugar de encuentro con Dios donde el fuego del Espíritu Santo transforma vidas. Cultos, eventos y comunidad en Tocumen, Panamá.",
    images: [
      {
        url: "/images/logo-vertical.png",
        width: 2001,
        height: 1900,
        alt: "Logo de Casa de Fuego y Liberación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iglesia Casa de Fuego y Liberación | Tocumen, Panamá",
    description:
      "Un lugar de encuentro con Dios donde el fuego del Espíritu Santo transforma vidas. Cultos, eventos y comunidad.",
    images: ["/images/logo-vertical.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agrega tu código de verificación de Google Search Console aquí
    // google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
