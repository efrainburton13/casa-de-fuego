import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Horarios from "@/components/Horarios";
import Lideres from "@/components/Lideres";
import Eventos from "@/components/Eventos";
import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";
import Ofrendar from "@/components/Ofrendar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
