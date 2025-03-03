import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://www.damiendagory.fr"),
  title: "Dagory Damien | Création de sites vitrines, e-commerce & SEO",
  description: "Développeur web freelance expert en création de sites vitrines, e-commerce et plateformes SaaS. Optimisation SEO et performance web pour les entreprises et indépendants. Disponible en Val-d’Oise (Franconville, Sannois, Argenteuil) et en Vendée (Les Herbiers, Cholet, Les Epesses, Chemillé, Angers).",
  keywords: "Création site vitrine, création site e-commerce, développement SaaS, optimisation SEO, refonte site web, développeur web Val-d’Oise, développeur web Vendée, Franconville, Sannois, Argenteuil, Les Herbiers, Cholet, Next.js, WordPress, PHP",
  author: "Dagory Damien",
  openGraph: {
    title: "Dagory Damien | Création de sites vitrines, e-commerce & SEO",
    description: "Développeur web expert en sites vitrines, e-commerce et solutions SaaS. Optimisation SEO et performance web pour les entreprises et indépendants en Val-d’Oise (Franconville, Sannois, Argenteuil) et en Vendée (Les Herbiers, Cholet, Les Epesses, Chemillé, Angers).",
    url: "https://www.damiendagory.fr",
    siteName: "Dagory Damien Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Dagory Damien",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  linkedin: {
    card: "summary_large_image",
    site: "https://www.linkedin.com/in/dagorydamien/",
    title: "Dagory Damien | Développeur Web | Sites vitrines, e-commerce & SEO",
    description: "Développeur web freelance spécialisé en création de sites vitrines, e-commerce et SaaS. Optimisation SEO et refonte web pour entreprises et indépendants.",
    image: "https://www.damiendagory.fr/images/preview.png",
  },
};





export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <Head>
        {/* Balises Meta SEO essentielles */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="FR-IDF" />
        <meta name="geo.region" content="FR-85" />
        <meta name="geo.placename" content="Île-de-France, Vendée" />

        {/* Open Graph pour Google et LinkedIn */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* LinkedIn Preview */}
        <meta property="og:title" content={metadata.linkedin.title} />
        <meta property="og:description" content={metadata.linkedin.description} />
        <meta property="og:image" content={metadata.linkedin.image} />
        <meta property="og:url" content={metadata.linkedin.site} />

        {/* Balises de base */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
