const PromoCarousel = () => {
  const promoTexts = [
    "🔥 OFERTAS ESPECIALES - HASTA 50% DE DESCUENTO",
    "✨ ENVÍO GRATIS EN COMPRAS MAYORES A $50",
    "🎉 NUEVA COLECCIÓN DISPONIBLE AHORA",
    "💎 PRODUCTOS PREMIUM AL MEJOR PRECIO",
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