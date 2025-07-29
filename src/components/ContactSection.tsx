import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-muted-foreground">contacto@modernweb.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Teléfono</h3>
                  <p className="text-muted-foreground">+58 414 228 2505</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ubicación</h3>
                  <p className="text-muted-foreground">Caracas, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <Input placeholder="Asunto del mensaje" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                <Send className="mr-2" size={16} />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;