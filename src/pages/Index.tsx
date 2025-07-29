import PromoCarousel from '@/components/PromoCarousel';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductCarousel from '@/components/ProductCarousel';
import ImageSection from '@/components/ImageSection';
import FlipCards from '@/components/FlipCards';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Sección 1: Carrusel de promociones + Header */}
      <PromoCarousel />
      <Header />
      
      {/* Sección 2: Banner carrusel */}
      <HeroBanner />
      
      {/* Sección 3: Texto + imagen + carrusel infinito de productos */}
      <ProductCarousel />
      
      {/* Sección 4: Imagen 100% width, 20vh */}
      <ImageSection 
        title="Mas de 1.000 GANADORES"
        description="Tú eres el próximo"
      />
      
      {/* Sección 5: Cards 3D interactivas */}
      <FlipCards />
      
      {/* Sección 6: Otra imagen destacada */}
      <ImageSection 
        title="MARTES y VIERNES de PóKER"
        description="Demuestra tu habilidad"
      />
      
      {/* Sección 7: Contacto */}
      <ContactSection />
      
      {/* Sección 8: Botón WhatsApp fijo */}
      <WhatsAppButton />
      
      {/* Sección 9: Footer profesional */}
      <Footer />
    </div>
  );
};

export default Index;
