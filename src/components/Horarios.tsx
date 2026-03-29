import { Clock, BookOpen, Users, Heart } from "lucide-react";

const servicios = [
  {
    icon: BookOpen,
    dia: "Domingo",
    hora: "9:00 AM - 11:00 AM",
    nombre: "Culto Dominical",
    descripcion: "Servicio principal de adoración y predicación de la Palabra",
  },
  {
    icon: Users,
    dia: "Miércoles",
    hora: "7:00 PM - 9:00 PM",
    nombre: "Estudio Bíblico",
    descripcion: "Profundizamos en la Palabra de Dios juntos",
  },
  {
    icon: Heart,
    dia: "Viernes",
    hora: "7:00 PM - 9:30 PM",
    nombre: "Noche de Avivamiento",
    descripcion: "Noche de oración, alabanza y búsqueda del Espíritu Santo",
  },
  {
    icon: Clock,
    dia: "Sábado",
    hora: "5:00 PM - 7:00 PM",
    nombre: "Reunión de Jóvenes",
    descripcion: "Espacio dedicado para la juventud de la iglesia",
  },
];

export default function Horarios() {
  return (
    <section id="horarios" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Horarios de Culto
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black/50 dark:text-white/50">
            Te esperamos en cada reunión. Ven y experimenta la presencia de Dios
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.nombre}
                className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group
                  bg-white border border-black/5
                  dark:bg-white/5 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                  bg-coral/10 group-hover:bg-coral/20
                  dark:bg-coral/15 dark:group-hover:bg-coral/25">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                <p className="text-sm font-semibold text-coral uppercase tracking-wide mb-1">
                  {s.dia}
                </p>
                <h3 className="text-xl font-bold mb-1 text-black dark:text-white">
                  {s.nombre}
                </h3>
                <p className="text-rosa font-semibold mb-3">{s.hora}</p>
                <p className="text-sm text-black/40 dark:text-white/40">
                  {s.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
