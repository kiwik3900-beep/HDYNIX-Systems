import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Services from "../components/Services";
import ClientPortal from "../components/ClientPortal";
import Process from "../components/Process";
import FeaturedProjects from "../components/FeaturedProjects";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import BusinessOS from "./BusinessOS";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <ClientPortal />
      <Process />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <BusinessOS />
      <FinalCTA />
      <Footer />
    </main>
  );
}

