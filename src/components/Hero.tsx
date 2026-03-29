import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-white dark:bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0
        bg-gradient-to-br from-white via-rosa/5 to-purpura/5
        dark:bg-gradient-to-br dark:from-black dark:via-purpura-deep/40 dark:to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl
        bg-coral/5 dark:bg-coral/10" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-vertical.png"
            alt="Casa de Fuego y Liberación"
            width={280}
            height={266}
            className="w-52 sm:w-64 md:w-72 h-auto"
            priority
          />
        </div>

        <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto
          text-black/60 dark:text-white/60">
          Un lugar de encuentro con Dios donde el fuego del Espíritu Santo
          transforma vidas
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#horarios"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral hover:bg-coral-light text-white font-semibold rounded-xl transition-all hover:scale-105"
          >
            Ver Horarios
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border-2 font-semibold rounded-xl transition-all
              border-black/15 text-black hover:bg-black/5
              dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2
          border-black/20 dark:border-white/30">
          <div className="w-1.5 h-3 bg-coral rounded-full" />
        </div>
      </div>
    </section>
  );
}
