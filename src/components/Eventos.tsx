import { Calendar, MapPin, Clock } from "lucide-react";

const eventos = [
  {
    titulo: "Conferencia de Avivamiento 2026",
    fecha: "12 - 14 de Abril, 2026",
    hora: "6:00 PM",
    lugar: "Auditorio Principal",
    descripcion:
      "Tres días de fuego, adoración y Palabra con invitados especiales.",
    destacado: true,
  },
  {
    titulo: "Bautizo en Aguas",
    fecha: "20 de Abril, 2026",
    hora: "10:00 AM",
    lugar: "Sede Principal",
    descripcion:
      "Celebramos juntos la decisión de nuevos creyentes de seguir a Cristo.",
    destacado: false,
  },
  {
    titulo: "Campamento de Jóvenes",
    fecha: "3 - 5 de Mayo, 2026",
    hora: "Todo el día",
    lugar: "Por confirmar",
    descripcion:
      "Un fin de semana de conexión, diversión y encuentro con Dios para jóvenes.",
    destacado: false,
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Próximos Eventos
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black/50 dark:text-white/50">
            No te pierdas lo que Dios tiene preparado para ti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventos.map((e) => (
            <div
              key={e.titulo}
              className={`rounded-2xl p-6 transition-shadow hover:shadow-lg ${
                e.destacado
                  ? "bg-gradient-to-br from-coral to-purpura text-white shadow-lg"
                  : "bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm"
              }`}
            >
              {e.destacado && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  DESTACADO
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-3 ${
                  e.destacado ? "text-white" : "text-black dark:text-white"
                }`}
              >
                {e.titulo}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar
                    className={`w-4 h-4 ${
                      e.destacado ? "text-white/70" : "text-coral"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      e.destacado ? "text-white/90" : "text-black/50 dark:text-white/50"
                    }`}
                  >
                    {e.fecha}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock
                    className={`w-4 h-4 ${
                      e.destacado ? "text-white/70" : "text-coral"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      e.destacado ? "text-white/90" : "text-black/50 dark:text-white/50"
                    }`}
                  >
                    {e.hora}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin
                    className={`w-4 h-4 ${
                      e.destacado ? "text-white/70" : "text-coral"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      e.destacado ? "text-white/90" : "text-black/50 dark:text-white/50"
                    }`}
                  >
                    {e.lugar}
                  </span>
                </div>
              </div>
              <p
                className={`text-sm ${
                  e.destacado ? "text-white/80" : "text-black/40 dark:text-white/40"
                }`}
              >
                {e.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
