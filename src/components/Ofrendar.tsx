import { Heart, CreditCard, Smartphone, Building2 } from "lucide-react";

const metodos = [
  {
    icon: CreditCard,
    nombre: "Tarjeta de Credito/Debito",
    detalle: "Transferencia segura en línea",
    accion: "#",
  },
  {
    icon: Smartphone,
    nombre: "Nequi / Daviplata",
    detalle: "Número: 300 123 4567",
    accion: null,
  },
  {
    icon: Building2,
    nombre: "Transferencia Bancaria",
    detalle: "Banco: XXXX | Cuenta: 0000-0000-0000",
    accion: null,
  },
];

export default function Ofrendar() {
  return (
    <section id="ofrendar" className="py-24
      bg-gradient-to-br from-purpura-dark to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-coral/20 rounded-full">
              <Heart className="w-10 h-10 text-coral-light" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ofrendar</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            &ldquo;Cada uno debe dar según lo que haya decidido en su corazón,
            no de mala gana ni por obligación, porque Dios ama al que da con
            alegría.&rdquo;
            <br />
            <span className="text-coral-light text-sm">2 Corintios 9:7</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metodos.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.nombre}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-coral/50 transition-colors"
              >
                <div className="w-14 h-14 bg-coral/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-coral-light" />
                </div>
                <h3 className="font-bold text-lg mb-2">{m.nombre}</h3>
                <p className="text-white/40 text-sm mb-4">{m.detalle}</p>
                {m.accion && (
                  <a
                    href={m.accion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-coral hover:bg-coral-light text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Donar Ahora
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/25 text-sm mt-8">
          Actualiza los metodos de pago y enlaces en el componente Ofrendar.tsx
        </p>
      </div>
    </section>
  );
}
