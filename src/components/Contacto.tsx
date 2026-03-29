"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <section id="contacto" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Contacto
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black/50 dark:text-white/50">
            ¿Tienes preguntas o necesitas oración? Escríbenos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 dark:bg-coral/15 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-coral" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white">
                  Teléfono
                </h3>
                <p className="text-black/50 dark:text-white/50">
                  +00 123 456 7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 dark:bg-coral/15 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-coral" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white">
                  Email
                </h3>
                <p className="text-black/50 dark:text-white/50">
                  contacto@casadefuego.org
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-coral/5 dark:bg-coral/10">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                Horarios de atención
              </h3>
              <p className="text-sm text-black/50 dark:text-white/50">
                Lunes a Viernes: 9:00 AM - 5:00 PM
                <br />
                Sábado: 9:00 AM - 1:00 PM
                <br />
                Domingo: Solo durante cultos
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold mb-1 text-black dark:text-white"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border transition-colors
                    bg-white border-black/10 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral
                    dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:ring-coral/50 dark:focus:border-coral"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1 text-black dark:text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border transition-colors
                    bg-white border-black/10 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral
                    dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:ring-coral/50 dark:focus:border-coral"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-semibold mb-1 text-black dark:text-white"
              >
                Asunto
              </label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border transition-colors
                  bg-white border-black/10 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral
                  dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:ring-coral/50 dark:focus:border-coral"
                placeholder="Motivo de tu mensaje"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-semibold mb-1 text-black dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border transition-colors resize-none
                  bg-white border-black/10 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral
                  dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:ring-coral/50 dark:focus:border-coral"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-coral hover:bg-coral-light text-white font-semibold rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </button>

            {enviado && (
              <p className="text-green-600 dark:text-green-400 font-semibold text-sm">
                Mensaje enviado correctamente. Nos pondremos en contacto contigo
                pronto.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
