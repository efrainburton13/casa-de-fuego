import { User } from "lucide-react";

const lideres = [
  {
    nombre: "Pastor Juan Pérez",
    rol: "Pastor Principal",
    foto: "/images/leaders/pastor1.jpg",
    descripcion:
      "Liderando la congregación con amor y visión desde hace 15 años.",
  },
  {
    nombre: "Pastora María Pérez",
    rol: "Co-Pastora",
    foto: "/images/leaders/pastor2.jpg",
    descripcion:
      "Encargada del ministerio de mujeres y consejería familiar.",
  },
  {
    nombre: "Carlos Rodríguez",
    rol: "Coordinador de Alabanza",
    foto: "/images/leaders/coord1.jpg",
    descripcion: "Dirigiendo la adoración y formando nuevos músicos.",
  },
  {
    nombre: "Ana Martínez",
    rol: "Coordinadora de Jóvenes",
    foto: "/images/leaders/coord2.jpg",
    descripcion: "Guiando a la nueva generación en el camino de Dios.",
  },
  {
    nombre: "Luis García",
    rol: "Coordinador de Células",
    foto: "/images/leaders/coord3.jpg",
    descripcion:
      "Fortaleciendo la comunidad a través de grupos pequeños.",
  },
  {
    nombre: "Sofía López",
    rol: "Coordinadora de Niños",
    foto: "/images/leaders/coord4.jpg",
    descripcion: "Sembrando la semilla de la fe en los más pequeños.",
  },
];

function LeaderAvatar() {
  return (
    <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-coral to-purpura flex items-center justify-center mx-auto mb-4">
      <User className="w-14 h-14 text-white/80" />
    </div>
  );
}

export default function Lideres() {
  return (
    <section id="lideres" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Nuestros Líderes
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black/50 dark:text-white/50">
            Pastores y coordinadores que sirven con pasión y dedicación
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lideres.map((l) => (
            <div
              key={l.nombre}
              className="text-center p-6 rounded-2xl transition-colors
                hover:bg-neutral-50 dark:hover:bg-white/5"
            >
              <LeaderAvatar />
              <h3 className="text-xl font-bold text-black dark:text-white">
                {l.nombre}
              </h3>
              <p className="text-rosa font-semibold text-sm mb-2">
                {l.rol}
              </p>
              <p className="text-sm text-black/40 dark:text-white/40">
                {l.descripcion}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8 text-black/25 dark:text-white/25">
          Para agregar fotos reales, coloca las imágenes en{" "}
          <code className="px-2 py-0.5 rounded text-xs bg-black/5 dark:bg-white/10">
            /public/images/leaders/
          </code>
        </p>
      </div>
    </section>
  );
}
