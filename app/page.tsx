import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Footer from  "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen items-center ">
      <div className="font-SpaceGrotesk">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Footer />
      </div>
    </main>
  );
}

