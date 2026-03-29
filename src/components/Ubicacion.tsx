import { MapPin, Navigation } from "lucide-react";

export default function Ubicacion() {
  const direccion = "Iglesia Casa de Fuego y Liberación, Panamá";
  const mapsUrl = "https://maps.app.goo.gl/E2Uja3chwtzjFesg8";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8!2d-79.4246141!3d9.0595478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab550069a90f23%3A0x30ee07b94e44866d!2sIglesia%20Casa%20de%20Fuego%20y%20Liberaci%C3%B3n!5e0!3m2!1ses!2spa!4v1711700000000";

  return (
    <section id="ubicacion" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Ubicación
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black/50 dark:text-white/50">
            Ven a visitarnos, te esperamos con los brazos abiertos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-neutral-200 dark:bg-neutral-800">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Casa de Fuego y Liberación"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 dark:bg-coral/15 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-coral" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-black dark:text-white">
                  Dirección
                </h3>
                <p className="text-black/50 dark:text-white/50">{direccion}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 dark:bg-coral/15 rounded-xl flex items-center justify-center shrink-0">
                <Navigation className="w-6 h-6 text-coral" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-black dark:text-white">
                  Cómo llegar
                </h3>
                <p className="text-black/50 dark:text-white/50">
                  Puedes llegar en transporte público o vehículo particular.
                  Contamos con estacionamiento disponible.
                </p>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral hover:bg-coral-light text-white font-semibold rounded-xl transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
