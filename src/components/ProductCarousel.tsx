import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';

const ProductCarousel = () => {
  const products = [product1, product2, product3, product1, product2, product3];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Nuestros Productos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestra selección premium de productos cuidadosamente elegidos para ti
          </p>
        </div>

        {/* Full width image */}
        <div className="w-full h-[20vh] mb-12 rounded-lg overflow-hidden">
          <img
            src={product1}
            alt="Featured Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-carousel">
            {/* First set */}
            {products.map((product, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-1/3 px-2">
                <div className="glass-effect rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img
                    src={product}
                    alt={`Product ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Producto {index + 1}</h3>
                    <p className="text-muted-foreground">Descripción del producto premium</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite effect */}
            {products.map((product, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-1/3 px-2">
                <div className="glass-effect rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img
                    src={product}
                    alt={`Product ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Producto {index + 1}</h3>
                    <p className="text-muted-foreground">Descripción del producto premium</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;