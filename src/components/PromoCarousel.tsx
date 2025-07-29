const PromoCarousel = () => {
  const promoTexts = [
    "🔥 Bingo todos los JUEVES y DOMINGOS",
    "✨ PAGOS en 4 horas",
    "🎉 LOTERIA TODOS LOS DIAS",
    "💎 A las 11 am  3pm  y 7pm",
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative flex animate-scroll whitespace-nowrap">
        {[...promoTexts, ...promoTexts].map((text, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 text-sm font-medium tracking-wide"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;