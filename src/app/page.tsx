import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Horarios from "@/components/Horarios";
import Lideres from "@/components/Lideres";
import Eventos from "@/components/Eventos";
import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";
import Ofrendar from "@/components/Ofrendar";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Iglesia Casa de Fuego y Liberación",
  alternateName: "Casa de Fuego y Liberación",
  description:
    "Iglesia cristiana en Tocumen, Panamá. Un lugar de encuentro con Dios donde el fuego del Espíritu Santo transforma vidas.",
  url: "https://casadefuegoyliberacion.com",
  telephone: "+00 123 456 7890",
  email: "contacto@casadefuego.org",
  image: "https://casadefuegoyliberacion.com/images/logo-vertical.png",
  logo: "https://casadefuegoyliberacion.com/images/logo-horizontal.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tocumen",
    addressRegion: "Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.0595478,
    longitude: -79.422039,
  },
  hasMap: "https://maps.app.goo.gl/E2Uja3chwtzjFesg8",
  sameAs: [
    "https://instagram.com/casadefuego",
    "https://tiktok.com/@casadefuego",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "11:00",
      description: "Culto Dominical",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "21:00",
      description: "Estudio Bíblico",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "19:00",
      closes: "21:30",
      description: "Noche de Avivamiento",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "17:00",
      closes: "19:00",
      description: "Reunión de Jóvenes",
    },
  ],
};

const eventsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Conferencia de Avivamiento 2026",
    startDate: "2026-04-12T18:00:00-05:00",
    endDate: "2026-04-14T21:00:00-05:00",
    location: {
      "@type": "Place",
      name: "Iglesia Casa de Fuego y Liberación",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tocumen",
        addressRegion: "Panamá",
        addressCountry: "PA",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Iglesia Casa de Fuego y Liberación",
      url: "https://casadefuegoyliberacion.com",
    },
    description:
      "Tres días de fuego, adoración y Palabra con invitados especiales.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {eventsJsonLd.map((event, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
        />
      ))}
      <Navbar />
      <main>
        <Hero />
        <Horarios />
        <Lideres />
        <Eventos />
        <Ubicacion />
        <Contacto />
        <Ofrendar />
      </main>
      <Footer />
    </>
  );
}
