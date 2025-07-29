import product2 from '@/assets/product2.jpg';

interface ImageSectionProps {
  imageUrl?: string;
  title?: string;
  description?: string;
}

const ImageSection = ({ 
  imageUrl = product2, 
  title = "Sección Destacada",
  description = "Una imagen impactante para captar la atención"
}: ImageSectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              {title}
            </h2>
            {description && (
              <p className="text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="w-full h-[20vh] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;