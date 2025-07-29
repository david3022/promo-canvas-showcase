import { useState } from 'react';
import product1 from '@/assets/product1.jpg';
import product3 from '@/assets/product3.jpg';

const FlipCards = () => {
  const [centerCard, setCenterCard] = useState(0);

  const cards = [
    {
      image: product1,
      title: "Producto Premium",
      description: "Descubre la calidad excepcional de nuestros productos premium"
    },
    {
      image: product3,
      title: "Innovación Tecnológica",
      description: "La última tecnología al alcance de tus manos"
    }
  ];

  const handleCardClick = (cardIndex: number) => {
    if (cardIndex !== centerCard) {
      setCenterCard(cardIndex);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Haz click en las tarjetas para explorar
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 perspective-1000">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-700 transform-gpu ${
                index === centerCard
                  ? 'scale-110 z-20 rotate-0'
                  : 'scale-90 z-10 hover:scale-95'
              } ${
                index === centerCard
                  ? ''
                  : index < centerCard
                  ? '-rotate-y-12 -translate-x-4'
                  : 'rotate-y-12 translate-x-4'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: `
                  ${index === centerCard ? 'scale(1.1)' : 'scale(0.9)'}
                  ${index === centerCard ? 'rotateY(0deg)' : index < centerCard ? 'rotateY(-12deg)' : 'rotateY(12deg)'}
                  ${index === centerCard ? 'translateX(0)' : index < centerCard ? 'translateX(-20px)' : 'translateX(20px)'}
                `
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="w-80 h-96 glass-effect rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2/3 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="h-1/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;