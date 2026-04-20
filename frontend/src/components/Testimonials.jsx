import React, { useEffect, useCallback, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from './ui/carousel';

export const Testimonials = () => {
  const { testimonials } = siteConfig;
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  // Autoplay cada 5 segundos
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  // Actualizar indicador de slide actual
  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', updateCurrent);
    updateCurrent();

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section id="testimonios" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            La confianza se construye con resultados y acompañamiento real
          </p>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-4">
                    <div className="bg-gray-50 p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative min-h-[400px] flex flex-col justify-between">
                      {/* Ícono de comillas */}
                      <div className="absolute top-8 right-8 opacity-10">
                        <Quote className="w-20 h-20 text-[hsl(var(--accent))]" />
                      </div>

                      {/* Contenido */}
                      <div className="relative z-10 flex-grow flex flex-col justify-center">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 italic text-center">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Información del cliente */}
                      <div className="border-t border-gray-200 pt-6 text-center">
                        <p className="text-xl font-bold text-[hsl(var(--primary))] mb-1">
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <p className="text-base text-gray-500">
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación personalizados */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <CarouselPrevious className="relative static translate-y-0 bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--navy-medium))] w-12 h-12 rounded-full" />
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current 
                        ? 'bg-[hsl(var(--accent))] w-8' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <CarouselNext className="relative static translate-y-0 bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--navy-medium))] w-12 h-12 rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
