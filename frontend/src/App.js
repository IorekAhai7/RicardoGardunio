import { useEffect } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { initGA4 } from "@/utils/analytics";
import { captureUTMParams } from "@/utils/utm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CalendlySection } from "@/components/CalendlySection";
import { LeadForm } from "@/components/LeadForm";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function App() {
  useEffect(() => {
    // Inicializar Google Analytics 4
    initGA4();
    
    // Capturar parámetros UTM
    captureUTMParams();
    
    // Smooth scroll para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      {/* Header fijo */}
      <Header />

      {/* Secciones principales */}
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services />
        <HowItWorks />
        <Testimonials />
        <CalendlySection />
        <LeadForm />
        <FAQs />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp flotante */}
      <WhatsAppFloat />

      {/* Toaster para notificaciones */}
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
